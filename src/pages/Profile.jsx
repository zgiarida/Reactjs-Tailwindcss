import { getAuth } from "firebase/auth";
import { useState } from "react"
import { useNavigate } from "react-router";

export default function Profile() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    })
    const {name, email} = formData;
    const logOut = () => {
        auth.signOut();
        navigate("/")
    }
    return (
        <>
        <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
            <h1 className="text-center my-4 text-2xl font-bold">My Profile</h1>
            <div className="w-full md:w-[50%] px-4 ">
                <form>
                    {/* form nama */}
                    <input className="w-full px-4 py-2 text-xl text-gray-400 border-gray-400 bg-white rounded-md transition ease-in-out" 
                    type="text" value={name} id="name" disabled/>
                    {/* form email */}
                    <input className="w-full px-4 my-4 py-2 text-xl text-gray-400 border-gray-400 bg-white rounded-md transition ease-in-out" 
                    type="email" value={email} id="email" disabled/>
                    <div className="flex justify-between">
                        <p>Do you want to change your name ? 
                            <span className="text-blue-800 font-semibold hover:text-blue-400 cursor-pointer transition ease-in-out duration-200"> Edit</span>
                        </p>
                        <p onClick={logOut} className="text-red-700 hover:text-red-400 cursor-pointer transition ease-in-out duration-200">Sign Out</p>
                    </div>
                </form>
            </div>
        </section>
        </>
    )

}