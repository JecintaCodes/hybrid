import React,{PropsWithChildren} from "react";

import { Navigate } from "react-router-dom";
import useUser from "../global/Jotai.";

const PrivateRoute:React.FC<PropsWithChildren> = ({
    children
})=>{
    const [state, setState] = useUser();
    console.log("private routers:", state);
    return <div>{state ? <div>{children}</div> : <Navigate to="sign-in" />}</div>;
}

export default PrivateRoute