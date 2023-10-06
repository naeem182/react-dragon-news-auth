import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";


export const AuthContex = createContext(null)

const Authprovider = ({ children }) => {

    const [user, setuser] = useState();

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sign in
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out
    const logout = () => {
        return signOut(auth)
    }



    //check current stste
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
        signin,
        logout




    }
    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default Authprovider
