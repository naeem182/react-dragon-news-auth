import {
    createBrowserRouter,

} from "react-router-dom";
import Mainlayoout from "../Mainlayout/Mainlayoout";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayoout></Mainlayoout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;