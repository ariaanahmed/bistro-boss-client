import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateP } = useContext(AuthContext)

    const navigate = useNavigate()

    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)

                updateP(data.name, data.photoUrl)
                    .then(() => {
                        console.log('user profile updated');
                        reset();
                        
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User has been created',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')

                    }).catch((error) => {
                        console.log(error)
                    })
            })
    }

    return (
        <>
            <Helmet>
                <title>bistro boss | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} name="photoUrl" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoUrl && <span>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter your email" className="input input-bordered" />
                                {errors.email && <span>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 25,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="Password" className="input input-bordered" />

                                {errors.password?.type === 'required' && <span>Password is required</span>}

                                {errors.password?.type === 'minLength' && <span>Password must be 6 characters</span>}

                                {errors.password?.type === 'maxLength' && <span>Password less than 25 characters</span>}

                                {errors.password?.type === 'pattern' && <span>Password must have one uppercase, one lowercase, one number and special character</span>}
                            </div>
                            <div className="form-control">
                                <input type="submit" value="Sign Up" className="btn btn-primary" />
                            </div>
                            <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            <Link to="/login">
                                <p className="label-text-alt link link-hover text-md font-semibold">Login</p>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;