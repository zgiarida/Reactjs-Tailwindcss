import { useState } from "react"
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
        const [email, setEmail] = useState("");
    const onChange = (e) => {
        setEmail(e.target.value);
    }

    return (

        <section>
            <h1 className="text-center pt-4 text-2xl font-bold">Forgot Password</h1>
            <div className="flex justify-center items-center flex-wrap mb-12 px-6 py-12 max-w-6xl mx-auto ">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
                    <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="cake" className="w-full rounded-2xl" />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-8 sm:w-[78%]">
                    <form>
                        <input className="w-full py-2 px-4 text-xl text-gray-800 rounded-md border-gray-300 transition ease-in-out my-5" 
                        type="email" id="email" 
                        value={email} 
                        onChange={onChange} placeholder="Email Addres..."/>
                        <div className="flex justify-between text-sm">
                            <p>Don't have account ?
                                <Link to="/sign-up" className="text-blue-400 italic hover:text-blue-600 transition duration-200 ease-in-out"> Register</Link>
                            </p>
                            <p>
                                <Link to="/sign-in" className="text-blue-400 hover:text-blue-600 transition duration-200 ease-in-out italic">Sign In</Link>
                            </p>
                        </div>
                    <button type="submit" className="w-full mt-4 bg-blue-900 rounded h-9 text-white hover:bg-blue-600 shadow-md transition duration-200 ease-in-out font-medium text-sm">SEND RESET PASSWORD</button>
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