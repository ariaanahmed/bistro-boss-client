import { CardElement, CartElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import './CheckoutForm.css'

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }

        console.log('payment intent', paymentIntent);

        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map((item) => item._id),
                menuItems: cart.map((item) => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map((item) => item.name)
            }
            axiosSecure.post('/payments', payment).then((res) => {
                console.log(res.data);
                if (res.data.result.insertedId) {
                    // display Confirm 
                }
            })
        }
    }
    return (
        <>
            <div>
                <p className='text-center capitalize'>This is check out form</p>
                <form onSubmit={handleSubmit} className='w-2/3 m-5'>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px', color: '#424770',
                                    '::placeholder': { color: '#aab7c4' }
                                },
                                invalid: { color: '#9e2146' },
                            },
                        }}
                    />
                    <button className='btn btn-primary mt-5 btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}> Pay </button>
                    {cardError && <p className='text-red-600 font-semibold mt-5'>{cardError}</p>}
                    {transactionId && <p className='text-green-600 font-semibold mt-5'>Transaction completed with: {transactionId}</p>}
                </form>
            </div>
        </>
    );
};

export default CheckoutForm;