import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Homepage from "../pages/screen/Homepage";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";



export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Homepage/>
            },
           
        ]
    },
    {
        path:"/register",
        element:<Register/>,
    },
    {
        path:"/sign-in",
        element:<SignIn/>,
    },
])