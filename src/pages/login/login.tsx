import React from "react";
import LoginUser from "../../components/login/bodyLogin/body";
import Header from "../../components/login/headerLogin/headerLogin"
import './style.css'

export default function Login () {
    return(
        <div>
            <Header/>
            <LoginUser/>
        </div>
    );
}