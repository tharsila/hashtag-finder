import React, {useContext} from "react"
import { AuthContext } from "./AuthContext"
import { SearchedHashtags } from "../../pages/SearchedHashtags/index"


export const LoginCheck = ({ children }: { children: JSX.Element }) => {
    const loginCheck = useContext( AuthContext )
    
    if ( !loginCheck.user) {
        return <SearchedHashtags />;
    }
    return children;
}