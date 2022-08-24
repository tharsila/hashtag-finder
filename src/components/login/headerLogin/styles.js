import styled from "styled-components";

export const Head = styled.header`
    width: 100vw;
    background: #0A1744 0% 0% no-repeat padding-box;
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 3px 29px #5538EE1F;
    opacity: 1;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    @media (max-width: 425px){
    
    }
`

export const Span = styled.span`
    color: #ffff;
    text-align: left;
    font-size: 35px;
    margin-left: 64px;
    letter-spacing: 0;
    font: normal normal normal 30px/27px Rubik;
    @media(max-width: 425px){
            width: auto;
            height: auto;
            font-size: 18px;
            margin-left: 16px;
        }
`

export const Button = styled.button`
    width: 139px;
    height: 37px;
    background-color: #72EFDB;
    border-radius: 25px;
    text-align: center;
    border: none;
    margin-right: 61px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 42px;
    letter-spacing: 1px;
    font: normal normal bold 15px/13px Rubik;
    opacity: 1;
    padding-inline: 23px;
    @media(max-width: 425px){
        width: 102px;
        height: 30px;
        margin-right: 16px;
        font-size: 11px;
        padding-inline: 12px;
    }
`


