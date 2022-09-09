import React from "react";
import LoginUser from "../../components/login/bodyLogin/body";
import { BodyLogin } from "../../components/login/bodyLogin/styles";
import { Headers } from "../../components/login/headerLogin";
export default function Login () {
    return(
        <BodyLogin>
            <Headers />
            <LoginUser/>
        </BodyLogin>
    );
}