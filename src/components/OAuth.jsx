import {FcGoogle} from "react-icons/fc"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";


export default function OAuth() {
        const navigate = useNavigate();
       async function onGoogleClick(){
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user;
            

            // check user uid (for add to database)

            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            
            if(!docSnap.exists()){
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                });
            }
            navigate("/")


        } catch (error) {
            toast.error("Cloud not authorize with Google")
        }
    }
 
    return (
        <button  onClick={onGoogleClick} type="button" className="flex justify-center items-center  w-full mt-1 bg-red-900 rounded h-9 text-white hover:bg-red-600 shadow-md transition duration-200 ease-in-ou font-medium text-sm">
            <FcGoogle className="text-lg bg-white rounded-full mr-2"/>
            CONTINUE WITH GOOGLE
            </button>
    )
}