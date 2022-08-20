import React, {useState} from "react";
import {ButtonForm} from "../headerLogin/styles"
import {Form, H3, Input } from "./styles"

function LoginUser () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange (e) => {
        setEmail(e.target.value);
    }

    return(
        <Form>
            <H3>Login</H3>
            <Input type="email" placeholder="Usuário"/>
            <Input type="password" placeholder="Senha"/>
            <ButtonForm>Acessar</ButtonForm>
        </Form>
    );


}

export default LoginUser;

