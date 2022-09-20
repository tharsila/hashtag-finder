import React, { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { SearchedHashtags } from "../../pages/searchedHashtags/index"


export const LoginCheck = ({ children }: { children: JSX.Element }) => {
    const CheckUser = useContext(AuthContext)

    if (CheckUser.user) {
        return <SearchedHashtags />;
    }
    return children;
}