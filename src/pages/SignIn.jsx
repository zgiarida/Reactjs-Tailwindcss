import { useState } from "react"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";


export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const {email, password} = formData;
    const navigate = useNavigate()
    const onChange = (e) => {
        setFormData((prevState) => ({
         ...prevState,
         [e.target.id] : e.target.value,
        }))
    }
    const onSubmit = async(e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if(userCredential.user){
                navigate("/")
            }
            
        } catch (error) {
            toast.error("Bad User Credential")
            
        }

    }
    return (

        <section>
            <h1 className="text-center pt-4 text-2xl font-bold">Sign In</h1>
            <div className="flex justify-center items-center flex-wrap mb-12 px-6 py-12 max-w-6xl mx-auto ">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
                    <img src="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="cake" className="w-full rounded-2xl" />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-8 sm:w-[78%]">
                    <form onSubmit={onSubmit}>
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
                    <button type="submit" className="w-full mt-4 bg-blue-900 rounded h-9 text-white hover:bg-blue-600 shadow-md transition duration-200 ease-in-out font-medium text-sm">SIGN IN</button>
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