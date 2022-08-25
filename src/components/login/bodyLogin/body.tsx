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

            let email = e.target.value 
                if (validator.isEmail(email)) {
                setEmail(email);
            } else if(email === ""){
                
            } else {
                alert("Enter a valid e-mail")
                e.target.value = ""
        }
    };

        //Funtion for set password user//
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let password = e.target.value
        if(validator.isStrongPassword(password)) {
            setPassword(e.target.value);
        } else if (password === "") {} else {
            alert("Enter a strong password")
            e.target.value = ""
        }
    };




    return (
        <Form>
            <H3>Login</H3>
            <Input type="email"
                placeholder="Usuário"
                name="e-mail"
                onBlur={(e) => { handleEmailChange(e) }}
            />
            <Input type="password"
                placeholder="Senha"
                onChange={(e) => { handlePasswordChange(e) }}
                required
            />
            <ButtonForm>
                Acessar
            </ButtonForm>
        </Form>
    );


}

export default LoginUser;

