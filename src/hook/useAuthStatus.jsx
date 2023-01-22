import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
// costums hook, diimport tanpa menggunakan default karna mengimport 2 objek variabel
export function useAuthStatus(){
    const [logginIn, setLogginIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);
    // cek user login dengan useEffect , menggunakan method omAuthStateChange firebase
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user){
                setLogginIn(true);
            }
            setCheckingStatus(false);
        })

    }, [])

    return {logginIn, checkingStatus};
}