import { Navigate } from "react-router-dom";

type Props = {
    children: JSX.Element
}


export const LoginCheck: React.FC<Props> = ({ children }) => {
    if (localStorage.getItem("Login") !== null) {
        return <Navigate to = "/" />
    };
    return children;
};