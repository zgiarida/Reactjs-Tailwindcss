import { useLocation, useNavigate } from "react-router"

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();
    const pathMatchRouter = (route) => {
        if (route === location.pathname) {
            return true;
        }
    }
    return (
        <div className="border-b bg-white shadow-md sticky top-0">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                <div>
                     <img src="https://img.icons8.com/dusk/512/warface-logo.png" alt="logo-banner" className="h-9 cursor-pointer" onClick={() => navigate("/")}/>   
                </div>
                <div>
                    <ul className="flex space-x-7">
                        <li className={`cursor-pointer py-3 border-b-[3px] text-sm font-semibold text-gray-400  border-b-transparent ${pathMatchRouter("/") && "border-b-orange-500 text-black"}`} onClick={() => navigate("/")}>Home</li>
                        <li className={`cursor-pointer py-3 border-b-[3px] text-sm font-semibold text-gray-400  border-b-transparent ${pathMatchRouter("/offers") && "border-b-orange-500 text-black"}`} onClick={() => navigate("/offers")}>Offers</li>
                        <li className={`cursor-pointer py-3 border-b-[3px] text-sm font-semibold text-gray-400  border-b-transparent ${pathMatchRouter("/sign-in") && "border-b-orange-500 text-black"}`} onClick={() => navigate("/sign-in")}>Sign in</li>
                    </ul>
                </div>
            </header>
        </div>

    )

}