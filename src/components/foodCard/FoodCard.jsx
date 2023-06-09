import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {

    const { image, name, price, recipe, _id } = item;

    const { user } = useContext(AuthContext);

    const [, refetch] = useCart()

    const navigate = useNavigate()

    const location = useLocation()

    const handleAddToCart = (item) => {
        if (user && user.email) {

            const cartItem = { menuItemId: _id, email: user.email, name, image, price };

            fetch('https://bistro-boss-server-pearl.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please Login  to Order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="font-semibold bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2 py-1 rounded-md">Price $: {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-5">add to cart a</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;