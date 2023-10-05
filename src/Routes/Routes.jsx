import {
    createBrowserRouter,

} from "react-router-dom";
import Mainlayoout from "../Mainlayout/Mainlayoout";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayoout></Mainlayoout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/reg",
                element: <Register></Register>
            },
        ]
    },
]);

export default router;