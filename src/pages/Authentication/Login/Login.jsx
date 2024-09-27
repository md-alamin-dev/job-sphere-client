import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleForgetPassword = async (email) => {
        // TODO: Implement Firebase password reset functionality
        // await firebase.auth().sendPasswordResetEmail(email);
        Swal.fire({
            title: 'Functionality Not Implemented',
            text: 'Forgot Password feature will be implemented later.',
            icon: 'info',
            timer: 2000,
            showConfirmButton: false,
        });
    };

    const onSubmit = async (data) => {
        const { email, password } = data;

        // TODO: Implement Firebase authentication login
        // try {
        //     await firebase.auth().signInWithEmailAndPassword(email, password);
        //     if (rememberMe) {
        //         localStorage.setItem('email', email);
        //         localStorage.setItem('password', password); // Save password only if necessary!
        //     }
        //     Swal.fire({
        //         title: 'Success!',
        //         text: 'Login successful!',
        //         icon: 'success',
        //         timer: 1000,
        //         showConfirmButton: false,
        //     });
        // } catch (error) {
        //     setErrors({ message: 'Invalid email or password. Please try again.' });
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Invalid email or password. Please try again.',
        //         icon: 'error',
        //         timer: 2000,
        //         showConfirmButton: false,
        //     });
        // }
    };

    return (

        <div className='flex items-center justify-center min-h-screen w-full p-4'>

            <div className="bg-white px-8 rounded-lg w-full max-w-md ">

                <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Login Your Account</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">

                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            defaultValue={localStorage.getItem('email') || ""}
                            className={`w-full p-2 border rounded transition-colors duration-300 
                                ${errors.email
                                    ? "border-red-500 focus:outline-red-500"
                                    : "border-[#feb47b] focus:outline-[#ff7e5f]"}`}

                            {...register("email", { required: "Email is required" })}
                        />
                    </div>

                    <div className="mb-4">

                        <label className="block mb-1 font-medium">Password</label>

                        <div className="relative">

                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}

                                defaultValue={localStorage.getItem('password') || ""}

                                className={`w-full p-2 border rounded transition-colors duration-300 
                                    ${errors.password
                                        ? "border-red-500 focus:outline-red-500"
                                        : "border-[#feb47b] focus:outline-[#ff7e5f]"}`}

                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                                })}
                            />
                            <button
                                onClick={togglePasswordVisibility}
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-xl"
                            >
                                <span className="text-[#ff7e5f]">
                                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                                </span>
                            </button>

                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center my-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                className="mr-2"
                            />
                            <label className="text-sm">Remember Me</label>
                        </div>

                        <button
                            onClick={() => handleForgetPassword(localStorage.getItem('email') || "")}
                            className="text-sm text-[#ff7e5f] underline"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 rounded bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white font-medium transition-colors duration-300 hover:from-[#feb47b] hover:to-[#ff7e5f]"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Don't have an account?{' '}

                    <Link to={"/sign-up"} className="text-[#ff7e5f] hover:underline font-medium italic">Sign Up</Link>
                </p>

                {errors.message && <p className="text-red-500 mt-4 text-center">{errors.message}</p>}
            </div>

            {/* Page Title */}
            <div>
                <Helmet>
                    <title>Login to Job Sphere</title>
                </Helmet>
            </div>
        </div>
    );
};

export default Login;
