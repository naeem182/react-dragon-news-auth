import {
    createBrowserRouter,

} from "react-router-dom";
import Mainlayoout from "../Mainlayout/Mainlayoout";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";


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
        ]
    },
]);

export default router;