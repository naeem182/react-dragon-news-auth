import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react"
import auth from "../firebase/firebase.config";


export const AuthContex = createContext(null)

const Authprovider = ({ children }) => {

    const [user, setuser] = useState();

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const userInfo = {
        user,
        createUser



    }
    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default Authprovider
