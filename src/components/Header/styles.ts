import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    background-color: rgb(10, 23, 68, 75%);
    box-shadow: 0px 3px 29px #5538EE1F;
    backdrop-filter: blur(30px);
    position: fixed;

    @media (max-width: 500px) {
        height: 82px;
    }
    @media (min-width: 501px) and (max-width: 1000px) {
        height: 90px;
    }
`;

export const Header = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    font-size: 35px;
    color: #FFF;

    #strong {
        font-weight: bold;
    }

    @media (max-width: 500px) {
        font-size: 19px;
    }
    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 27px;
    }
`