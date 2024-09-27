import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import Swal from 'sweetalert2';
import SocialLogins from '../SocialLogins/SocialLogins';
import { Link } from 'react-router-dom';

// Free API to get user's location (using ipapi)
const userCountry = async () => {
    try {
        // Get user's IP address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ip = ipData.ip;

        // Get location data using the IP address
        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const locationData = await locationResponse.json();

        return { country: locationData.country_name, code: locationData.country_calling_code };
    }
    catch (error) {
        console.error("Failed to fetch user location", error);
        return { country: "United States", code: "+1" }; // Default country if API fails
    }
};

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset, // To reset form after submission
        watch,
        formState: { errors },
    } = useForm();

    const [termsAccepted, setTermsAccepted] = useState(false); // To track terms acceptance

    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for confirm password

    const [role, setRole] = useState(null); // To track user role selection

    const [selectedCountry, setSelectedCountry] = useState("United States");
    const [selectedPhoneCode, setSelectedPhoneCode] = useState("+1");

    useEffect(() => {
        // Fetch user's country and phone code automatically
        const getUserCountry = async () => {
            const locationData = await userCountry();
            setSelectedCountry(locationData.country);
            setSelectedPhoneCode(locationData.code);
        };

        getUserCountry();

    }, []);

    const onSubmit = async (data) => {
        // Check if role is selected before submitting
        if (!role) {
            Swal.fire({
                title: 'Error!',
                text: 'Please select your role: Candidate or Employee',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        // Prepare data for submission
        const userData = {
            userRole: role,
            name: data.name,
            email: data.email,
            password: data.password,
            country: selectedCountry,
            phone: `${selectedPhoneCode} ${data.phone}` // Combine phone code and number
        };

        // Log form data to the console
        console.log(userData);

        // Simulate successful signup (Replace with actual API call)
        const response = true;

        if (response) {
            Swal.fire({
                title: 'Success!',
                text: 'Your account has been created!',
                icon: 'success',
                confirmButtonText: 'OK',
            });

            reset(); // Reset form after successful signup
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Unable to create account. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    // Toggle visibility for password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Toggle visibility for confirm password
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className=''>

            <div className="flex items-center justify-center min-h-screen w-10/12 mx-auto rounded-lg">

                <div className="bg-white my-10 p-8 rounded-lg ">

                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Create an Account</h2>

                    {/* Role Selection */}
                    <div className="mb-6 flex justify-between gap-6">

                        <div onClick={() => setRole("Candidate")}
                            className={`border p-4 cursor-pointer rounded-md w-1/2 text-center hover:border-[#ff7e5f] 
                             ${role === "Candidate"
                                    ? 'border-[#ff7e5f] text-white bg-[#feb47b] transition-colors duration-300'
                                    : 'border-[#feb47b]'}`}>

                            <h3 className="font-bold">As a Candidate</h3>
                        </div>

                        <div onClick={() => setRole("Employee")}
                            className={`border p-4 cursor-pointer rounded-md w-1/2 text-center hover:border-[#ff7e5f] 
                             ${role === "Employee"
                                    ? 'border-[#ff7e5f] text-white bg-[#feb47b] transition-colors duration-300'
                                    : 'border-[#feb47b]'}`}>

                            <h3 className="font-bold">As an Employee</h3>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-6">

                            {/* Name */}
                            <div className="mb-4">

                                <label className="block mb-1 font-medium">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    className={`w-full p-2 border rounded transition-colors duration-300 
                                        ${errors.name
                                            ? "border-red-500"
                                            : "border-[#feb47b] focus:outline-[#ff7e5f]"}`}

                                    {...register("name", { required: "Name is required" })}
                                />

                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                            </div>

                            {/* Email */}
                            <div className="mb-4">

                                <label className="block mb-1 font-medium">Email</label>

                                <input
                                    name="email"
                                    type="email"

                                    className={`w-full p-2 border rounded transition-colors duration-300 
                                        ${errors.email
                                            ? "border-red-500"
                                            : "border-[#feb47b] focus:outline-[#ff7e5f]"}`}

                                    {...register("email", { required: "Email is required" })}
                                />

                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Password</label>

                                {/* Relative container for input and icon */}
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        className={`w-full p-2 border rounded transition-colors duration-300 
                                       
                                            ${errors.password
                                                ? "border-red-500"
                                                : "border-[#feb47b] focus:outline-[#ff7e5f]"}`}

                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be at least 6 characters" }
                                        })}
                                    />

                                    {/* Password visibility toggle icon */}
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

                                {/* Error message */}
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Confirm Password</label>

                                {/* Relative container for input and icon */}
                                <div className="relative">
                                    <input
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        className={`w-full p-2 border rounded transition-colors duration-300 
                                    
                                            ${errors.confirmPassword
                                                ? "border-red-500"
                                                : "border-[#feb47b] focus:outline-[#ff7e5f]"}`}

                                        {...register("confirmPassword", {
                                            required: "Confirm password is required",
                                            validate: (value) => value === watch('password') || "Passwords do not match"
                                        })}
                                    />

                                    {/* Confirm password visibility toggle icon */}
                                    <button
                                        onClick={toggleConfirmPasswordVisibility}
                                        type="button"
                                        className="absolute inset-y-0 right-3 flex items-center text-xl"
                                    >
                                        <span className="text-[#ff7e5f]">
                                            {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                                        </span>
                                    </button>
                                </div>

                                {/* Error message */}
                                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                            </div>



                            {/* Country */}
                            <div className="mb-4">

                                <label className="block mb-1 font-medium">Country</label>

                                <input
                                    name="country"
                                    type="text"
                                    value={selectedCountry}
                                    disabled

                                    className="w-full p-2 border border-[#feb47b] rounded focus:outline-[#ff7e5f]"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="mb-4">

                                <label className="block mb-1 font-medium">Phone Number</label>

                                <div className="flex">
                                    <span className="flex items-center bg-[#feb47b] text-white p-2 border border-[#feb47b] rounded-l">
                                        {selectedPhoneCode}
                                    </span>

                                    <input
                                        name="phone"
                                        type="text"

                                        className={`w-full p-2 border border-[#feb47b] rounded-r transition-colors duration-300 
                                            ${errors.phone ? "border-red-500" : "border-[#feb47b] focus:outline-[#ff7e5f]"}`}

                                        {...register("phone", { required: "Phone number is required" })}
                                    />
                                </div>

                                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

                            </div>
                        </div>

                        {/* Terms Acceptance */}
                        <div className="flex items-center mb-4">

                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={() => setTermsAccepted(!termsAccepted)}
                            />

                            <span className="ml-2">I accept the Terms and Conditions</span>

                        </div>

                        <button
                            type="submit"

                            className={`w-full p-2 rounded bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white font-medium transition-colors duration-300 
                                ${!termsAccepted ? "cursor-not-allowed"
                                    : " hover:from-[#feb47b] hover:to-[#ff7e5f]"}`}
                            disabled={!termsAccepted}
                        >
                            Sign Up
                        </button>

                    </form>

                    <div className="text-center mt-6">
                        <p>Already have an account
                            <span className='hover:underline font-medium italic text-[#ff7e5f]'>
                                <Link to={'/login'}> Login </Link>
                            </span>
                        </p>
                        <p className='my-4 italic font-medium'>Or Continue With</p>

                        {
                            <SocialLogins></SocialLogins>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
