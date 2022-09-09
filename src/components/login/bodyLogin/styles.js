import styled from "styled-components"
import background from "../../../images/hero-bg.jpg"
import Mobile from "../../../images/mobileHeroBg.jpg" 

export const Form = styled.form`
width: 378px;
height: 425px;
margin-top: 90px;
margin-left: 36vw;
margin-right: auto;
display: flex;
align-items: center;
flex-direction: column;
background: rgb(0 0 0 / 26%);
border-radius: 14px;
backdrop-filter: blur(30px);
margin-bottom: 100px;
    @media (max-width: 767px){
        margin-top: 60px;
        width: 85%;
        position: relative;
        height: 400px;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 100px;
    }
`

export const H3 = styled.h3`
color: #72EFDB;
text-align: center;
font: normal normal bold 25px/21px Rubik;
letter-spacing: 0px;
margin: 100px 0 50px 0;
@media (max-width: 767px){
    margin: 62px 0 50px 0;
    font-size: 34px;
}
`


export const Input = styled.input`
width: 80%;
height: 8%;
border: 0;
border-bottom: 2px solid rgba(255, 255, 255, 0.288);
margin-bottom: 30px;
background: rgba(255, 255, 255, 0);

&::placeholder {
    color: rgb(255, 255, 255);
    font-size: 10px;
    letter-spacing: 1px;
}

&:focus {
    outline: none !important;
    boder: 1px solid blue;
    color: white;
    box-shadow: 0 0 10px #719ECE;
}
`


export const BodyLogin = styled.div`
background-image: url(${background});
height: 100vh;
background-size: cover;
    @media(max-width: 428px){
        background-image: url(${Mobile});
        background-size: cover;
    }
`
