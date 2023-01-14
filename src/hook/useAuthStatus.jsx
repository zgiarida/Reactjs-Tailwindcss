import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export function useAuthStatus(){
    const [logginIn, setLogginIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

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