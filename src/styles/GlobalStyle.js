import { createGlobalStyle } from "styled-components";
import img from "../assets/heroBg.jpg";
import img2 from "../assets/mobileHeroBg.jpg";

export default createGlobalStyle`
body{
    font-family: "rubik";
    margin: 0;
    max-width: 1200px;
    background-image:url(${img});
    background-size: cover;  
    background-repeat: no-repeat;
        @media(max-width: 428px){
            background-image: url(${img2})
        }
}
`