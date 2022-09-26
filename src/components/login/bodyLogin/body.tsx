import React, { useState, useContext, ReactElement } from "react";
import { ButtonForm, CloseButton, ErrorMessage, ErrorMessageCredentials, Form, H3, Input, Modal } from "./styles";
import validator from 'validator';
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import {  useNavigate } from "react-router-dom";





const LoginUser = () => {

    // variables that store user data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useContext( AuthContext );
    const navigate = useNavigate();
    const [validateInput, setValidateInput] = useState<string | ReactElement>('')
    const [validateEmail, setValidateEmail] = useState<string | ReactElement>('')
    const [validateCredentials, setValidateCredentials] = useState<string | ReactElement>('')
    


        //function that validates email 
        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let testEmail = e.target.value;
            if (validator.isEmail(testEmail)) {
                setEmail(testEmail);
            } else if(testEmail === ""){
               setValidateEmail("O campo Email não pode ficar vazio!")
            } else {
                setValidateEmail("Entre com um email válido !")
                e.target.value = ""
        }
        setValidateCredentials("")
    };

        //Funtion for set password user//
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
            if(e.target.value === ""){
                setValidateInput("O campo de senha não pode ficar vazio!")
            } else {
            setPassword(e.target.value);
            }
        };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();      

        if (email && password) {
            const isLogged = await auth.signIn(email, password);
            if ( isLogged ) {
                navigate('/Hashtags');
                console.log(isLogged)
            } else {
                setValidateCredentials("verifique suas credenciais!")
            }
        }
    };
    

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <H3>Login</H3>
            {validateEmail ? (
                <>
                <ErrorMessage>{ validateEmail }</ErrorMessage>
                </>
            ): null }
            <Input type="email"
                placeholder="Usuário"
                name="e-mail"
                onBlur = {(e) => { handleEmailChange(e) }}
                value = {email}
                onChange = {(e) => setEmail(e.target.value) }
                onClick = {(e) => setValidateEmail("")}
            />
            {validateInput ?(
                <>
                <ErrorMessage>{ validateInput }</ErrorMessage>
                </>
            ): null }

            <Input type="password"
                name="Password"
                placeholder="Senha"
                onBlur = {(e) => { handlePasswordChange(e) }}
                onChange = {(e) => setPassword(e.target.value)}
                onClick = {(e) => setValidateInput("")}
            />
            <ButtonForm type="submit">ACESSAR</ButtonForm>
            {validateCredentials ? (
                <Modal> 
                    <CloseButton onClick={(e) => setValidateCredentials("")}>X</CloseButton>
                <ErrorMessageCredentials>{ validateCredentials }</ErrorMessageCredentials>
                </Modal>
            ): null}
        </Form>
    );


}

export default LoginUser;

