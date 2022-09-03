import React, { useState } from "react";
import { ButtonForm } from "./styles";
import { Form, H3, Input } from "./styles";
import validator from 'validator';



const LoginUser = () => {
    // variables that store user data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


        //function that validates email 
        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let testEmail = e.target.value;
            if (validator.isEmail(testEmail)) {
                setEmail(email);
            } else if(testEmail === ""){
                alert("Email field cannot be empty")
            } else {
                alert("Enter a valid e-mail")
                e.target.value = ""
        }
    };

        //Funtion for set password user//
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
            if(e.target.value === ""){
                alert("Password field cannot be empty")
            } else {
            setPassword(e.target.value);
            }
        };




    return (
        <Form>
            <H3>Login</H3>
            <Input type="email"
                placeholder="Usuário"
                name="e-mail"
                onBlur = {(e) => { handleEmailChange(e) }}
            />
            <Input type="password"
                placeholder="Senha"
                onBlur = {(e) => { handlePasswordChange(e) }}
            />
            <ButtonForm>
                Acessar
            </ButtonForm>
        </Form>
    );


}

export default LoginUser;

