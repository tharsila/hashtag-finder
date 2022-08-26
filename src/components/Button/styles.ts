import styled from "styled-components";

export const ButtonContainer = styled.button(({ color, backgroundColor }: { color: string; backgroundColor: string }) => (`
    width: 170px;
    height: 49px;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    box-shadow: 0px 3px 6px #5538EE29;
    border-radius: 25px;
    margin-left: 30px;
    border: none;
    letter-spacing: 2.55px;
    color: ${color};
    background-color: ${backgroundColor};
    cursor: pointer;
    transition: .3s;
    
    &:hover {
        filter: brightness(120%);
    }
`));

export const Icon = styled.img`
    margin-right: 10px;
    width: 13px;
    height: 13px;
`;