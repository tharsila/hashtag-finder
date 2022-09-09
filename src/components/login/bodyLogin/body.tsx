import React, { useState, useContext } from "react";
import { ButtonForm } from "./styles";
import { Form, H3, Input } from "./styles";
import validator from 'validator';
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";



const LoginUser = () => {

    // variables that store user data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useContext( AuthContext );
    const navigate = useNavigate();


        //function that validates email 
        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let testEmail = e.target.value;
            if (validator.isEmail(testEmail)) {
                setEmail(testEmail);
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();      

        if (email && password) {
            const isLogged = await auth.signIn(email, password);
            if ( isLogged ) {
                navigate('/');
                console.log(isLogged)
            } else {
                alert("Unable to login, please check your credentials")
            }
        }
    };


            //Functions to clear form input
                // const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
                //     setEmail(e.target.value);
                // }

                // const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
                //     setPassword(e.target.value);
                // }
    

    return (
        <Form onSubmit={handleSubmit}>
            <H3>Login</H3>
            <Input type="email"
                placeholder="Usuário"
                name="e-mail"
                onBlur = {(e) => { handleEmailChange(e) }}
                value = {email}
                onChange = {(e) => setEmail(e.target.value) }
            />
            <Input type="password"
                name="Password"
                placeholder="Senha"
                onBlur = {(e) => { handlePasswordChange(e) }}
                onChange = {(e) => setPassword(e.target.value)}
            />
            <ButtonForm type="submit">
                Acessar
            </ButtonForm>
        </Form>
    );


}

export default LoginUser;

