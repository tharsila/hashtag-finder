import { useContext } from "react";
import Login from "../../pages/login/login";
import { AuthContext } from "./AuthContext";


export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const Auth = useContext( AuthContext );

    if (!Auth.user) {
        return <Login />;
    }

    return children;
}