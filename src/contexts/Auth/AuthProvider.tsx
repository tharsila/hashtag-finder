import React, { useState, useEffect } from "react"
import User from "../../types/User"
import { AuthContext } from "./AuthContext"
import { airtableApi } from "../../api/airtableApi"


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = airtableApi();
    const [token, setTokenN] = useState("102030405060708090100110120130140150160abcdefghijkalkdjnvjbiuand18923y9713ybdlkand9¨%$¨%*&");

    useEffect(() => {
        validateToken();
    }, []);


    const validateToken = () => {
        const storageData = localStorage.getItem('token');
        if (storageData) {
            if (storageData === token) {
                setUser({ Email: "valido", Senha: "valida" })
            }

        }
    }

    const signIn = async (Email: string, Senha: string) => {
        const data = await api.signIn(Email, Senha);
        if (data) {
            if (data.Email === Email && data.Senha === Senha) {
                setUser(data)
                setToken()

                return true
            }
        }
        return false;
    }

    const signOut = () => {
        setUser(null)
        setTokenN("")
        localStorage.removeItem("token")
    }

    const setToken = () => {
        localStorage.setItem("token", token)
    }


    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}