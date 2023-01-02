import { useState } from "react"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const {name, email, password} = formData;
    const onChange = (e) => {
        setFormData((prevState) => ({
         ...prevState,
         [e.target.id] : e.target.value,
        }))
    }

    return (

        <section>
            <h1 className="text-center pt-4 text-2xl font-bold">Sign Up</h1>
            <div className="flex justify-center items-center flex-wrap mb-12 px-6 py-12 max-w-6xl mx-auto ">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
                    <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="cake" className="w-full rounded-2xl" />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-8 sm:w-[78%]">
                    <form>
                        <input className="w-full py-2 px-4 text-xl text-gray-800 rounded-md border-gray-300 transition ease-in-out my-4" 
                        type="text" id="name" 
                        value={name}
                        onChange={onChange} placeholder="Full Name..."/>
                        <input className="w-full py-2 px-4 text-xl text-gray-800 rounded-md border-gray-300 transition ease-in-out" 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={onChange} placeholder="Email Addres..."/>
                        <div className="relative">
                            <input className="w-full py-2 px-4 text-xl text-gray-800 rounded-md border-gray-300 transition ease-in-out my-4" 
                            type={showPassword ? "text" : "password"} 
                            id="password" 
                            value={password} 
                            onChange={onChange} placeholder="Password..."/>
                            {showPassword ? 
                            (<BsFillEyeFill className="absolute right-3 top-7 cursor-pointer text-xl"
                            onClick={() => setShowPassword((prevState) => !prevState)}/>) : 
                            (<BsFillEyeSlashFill className="absolute right-3 top-7 cursor-pointer text-xl"
                            onClick={() => setShowPassword((prevState) => !prevState)}/>)}
                        </div>
                        <div className="flex justify-between text-sm">
                            <p>Have account ?
                                <Link to="/sign-in" className="text-blue-400 italic hover:text-blue-600 transition duration-200 ease-in-out"> Sign In</Link>
                            </p>
                            <p>
                                <Link to="/forgot-password" className="text-red-400 hover:text-red-600 transition duration-200 ease-in-out italic">Forgot Password ?</Link>
                            </p>
                        </div>
                    <button type="submit" className="w-full mt-4 bg-blue-900 rounded h-9 text-white hover:bg-blue-600 shadow-md transition duration-200 ease-in-out font-medium text-sm">SIGN UP</button>
                    <div className="flex items-center before:flex-1 before:border-t-2 before:border-gray-300 after:flex-1 after:border-gray-300 after:border-t-2 my-1">
                        <p className="text-center font-semibold mx-1">OR</p>
                    </div>
                    <OAuth />
                    </form>
                </div>
            </div>
        </section>

    )

} 