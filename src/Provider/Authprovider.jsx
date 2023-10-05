import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";


export const AuthContex = createContext(null)

const Authprovider = ({ children }) => {

    const [user, setuser] = useState();

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log('user in the auth state', currentuser);
            setuser(currentuser)
        });
        return () => { unsubscribe }
    }, [])

    const userInfo = {
        user,
        createUser,




    }
    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default Authprovider
