import { createContext } from "react"

const AuthContex = createContext(null)

const Authprovider = ({ children }) => {
    const userInfo = {
        name="naeem";
    }
    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default Authprovider
