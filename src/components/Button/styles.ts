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

    @media (max-width: 500px) {
        width: 86px;
        height: 27px;
        font-size: 10px;
        margin-left: 10px;
    }
    @media (min-width: 501px) and (max-width: 670px) {
        width: 100px;
        height: 30px;
        font-size: 12px;
        margin-left: 15px;
    }
    @media (min-width: 671px) and (max-width: 1000px) {
        width: 144px;
        height: 41px;
        font-size: 14px;
    }
`));

export const Icon = styled.img`
    margin-right: 10px;
    width: 13px;
    height: 13px;
    text-align: center;

    @media (max-width: 500px) and (max-width: 670px) {
        margin-right: 5px;
    }
    
`;