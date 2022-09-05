import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

export const AuthProviders = ({ children }) => {
    const [isSigned, setIsSigned] = useState();

        const Login = (inSigned) => {
            localStorage.setItem("Login", true);
            setIsSigned(isSigned)
        };

        const Logout = () => {
            localStorage.clear();
            setIsSigned(null);
        }

            return(
                <AuthContext.Provider value = {{isSigned, Login, Logout}}>
                    {children}
                </AuthContext.Provider>
            );
};

export const useProvider = () => {
    return useContext(AuthContext);
};



