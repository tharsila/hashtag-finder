import React, { useState } from "react";
import { ButtonForm } from "./styles";
import { Form, H3, Input } from "./styles";
import validator from 'validator';
import { useNavigate } from "react-router-dom";



const LoginUser = () => {

    // variables that store user data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
    const API_KEY = process.env.REACT_APP_API_KEY;


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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();      
        console.log("Submit",email);

        
        //Checking if the user is authorized in the api

        const url = "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?filterByFormula=AND" + `({Squad}= '06-22',{Email}='${email}',{Senha}= '${password}')`;
                fetch(encodeURI(url), {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                    },
                })
                    .then((response) => response.json())
                    .then(function (response) {
                        if (response.records[0] !== undefined) {
                            nav("/")
                        }
                            // if you have an invalid field display an error message and clear the form

                            return (alert("User or Password invalid ! Please check your data"), setEmail(""), setPassword(""))
                    })
    };


            //Functions to clear form input
                const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                }

                const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                }
    

    return (
        <Form onSubmit={handleSubmit}>
            <H3>Login</H3>
            <Input type="email"
                placeholder="Usuário"
                name="e-mail"
                onBlur = {(e) => { handleEmailChange(e) }}
                value = {email}
                onChange = {(e) => { handleChangeEmail(e) }}
            />
            <Input type="password"
                name="Password"
                placeholder="Senha"
                onBlur = {(e) => { handlePasswordChange(e) }}
                onChange = {(e) => {handleChangePassword(e) }}
            />
            <ButtonForm type="submit">
                Acessar
            </ButtonForm>
        </Form>
    );


}

export default LoginUser;

