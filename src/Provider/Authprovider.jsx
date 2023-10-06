import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";


export const AuthContex = createContext(null)

const Authprovider = ({ children }) => {

    const [user, setuser] = useState();
    const [loading, setloading] = useState(true)


    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sign in
    const signin = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out
    const logout = () => {
        setloading(true);
        return signOut(auth)
    }



    //check current stste
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log('user in the auth state', currentuser);
            setuser(currentuser)
            setloading(false);
        });
        return () => { unsubscribe }
    }, [])

    const userInfo = {
        user,
        createUser,
        signin,
        logout,
        loading




    }
    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default Authprovider
