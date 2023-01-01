import { useState } from "react"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import { Link } from "react-router-dom";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const {email, password} = formData;
    const onChange = (e) => {
        setFormData((prevState) => ({
         ...prevState,
         [e.target.id] : e.target.value,
        }))
    }

    return (

        <section>
            <h1 className="text-center pt-4 text-2xl font-bold">Sign In</h1>
            <div className="flex justify-center items-center flex-wrap mb-12 px-6 py-12 max-w-6xl mx-auto ">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
                    <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="cake" className="w-full rounded-2xl" />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-8 sm:w-[78%]">
                    <form>
                        <input className="w-full py-2 px-4 text-xl text-gray-800 rounded-md border-gray-300 transition ease-in-out" 
                        type="email" id="email" 
                        value={email} 
                        onChange={onChange} placeholder="Email Addres..."/>
                        <div className="relative">
                            <input className="w-full py-2 px-4 text-xl text-gray-800 rounded-md border-gray-300 transition ease-in-out my-4" 
                            type={showPassword ? "text" : "password"} id="password" 
                            value={password} 
                            onChange={onChange} placeholder="Password..."/>
                            {showPassword ? 
                            (<BsFillEyeFill className="absolute right-3 top-7 cursor-pointer text-xl"
                            onClick={() => setShowPassword((prevState) => !prevState)}/>) : 
                            (<BsFillEyeSlashFill className="absolute right-3 top-7 cursor-pointer text-xl"
                            onClick={() => setShowPassword((prevState) => !prevState)}/>)}
                        </div>
                        <div className="flex justify-between text-sm">
                            <p>Don't have account ?
                                <Link to="/sign-up" className="text-blue-400 italic hover:text-blue-600 transition duration-200 ease-in-out"> Register</Link>
                            </p>
                            <p>
                                <Link to="/forgot-password" className="text-red-400 hover:text-red-600 transition duration-200 ease-in-out italic">Forgot Password ?</Link>
                            </p>
                        </div>
                    </form>
                    <button type="submit" className="w-full my-6 bg-blue-900 rounded h-9 text-white hover:bg-blue-600 shadow-md transition duration-200 ease-in-out">SIGN IN</button>
                </div>
            </div>
        </section>

    )

} 