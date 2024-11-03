import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";


const UseAuth = () => {

    const auth = useContext(AuthContext);
    return auth;
};

export default UseAuth;