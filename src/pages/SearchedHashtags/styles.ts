import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: rgb(13,39,112);
    background: linear-gradient(180deg, rgba(13,39,112,1) 0%, rgba(9,9,121,1) 50%, rgba(9,38,93,1) 100%);
`;

export const TableArea = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    width: 95%;
    height: 300px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span(({ fontSize }: { fontSize: number }) => (`
    font-size: ${fontSize}px;
    color: #72EFDB;
    font-weight: bold;

    @media (max-width: 1000px) {
        font-size: ${fontSize - 4}px;
        text-align: center;
    }
    @media (max-width: 500px) {
        font-size: ${fontSize - 8}px;
    }
`));

export const TableTitle = styled.span(({ fontSize }: { fontSize: number }) => (`
    font-size: ${fontSize}px;
    color: #72EFDB;
    font-weight: bold;

    @media (max-width: 1000px) {
        font-size: ${fontSize - 4}px;
    }
    @media (max-width: 500px) {
        font-size: ${fontSize - 8}px;
    }

    &:nth-child(1) {
        flex: 70%;
    }
    &:nth-child(2) {
        flex: 20%;
        margin-right: 40px;
    }
    &:nth-child(3) {
        flex: 10%;
    }
`));

export const Table = styled.div`
    width: 100%;
    margin-top: 40px;
`;

export const Head = styled.div`
    position: relative;
    width: 100%;
    height: 106px;
    display: flex;
    padding: 56px 63px 22px 63px;
    border-radius: 14px;
    text-align: left;
    background-color: rgb(10, 23, 68, 65%);
    box-shadow: 0px 3px 29px #5538EE1F;
    backdrop-filter: blur(30px);
    z-index: 1;

    @media (max-width: 1000px) {
        height: 80px;
        padding: 40px 47px 22px 47px;
    }
    @media (max-width: 500px) {
        height: 49px;
        padding: 18px 16px 11px 19px;
    }
`;

export const Body = styled.div`
    width: 100%;
    min-height: 100px;
    background: rgb(2,31,100);
    background: radial-gradient(circle, rgba(2,31,100,1) 0%, rgba(0,33,109,1) 50%, rgba(0,24,98,1) 100%);
    box-shadow: 0px 3px 29px #5538EE1F;
    backdrop-filter: blur(30px);
    border-radius: 0 0 14px 14px;
    margin-top: -10px;
    color: #FFF;
    padding: 22px;

    @media (max-width: 1000px) {
        padding-bottom: 2px;
    }
    @media (max-width: 500px) {
        padding: 15px 8px 1px;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    text-align: flex-start;
    font-size: 24px;
    border-bottom: 1px solid #153376;
    padding: 0 calc(63px - 22px);
    margin-bottom: 32px;

    @media (max-width: 1000px) {
        font-size: 20px;
        padding: 0 calc(47px - 22px);
        height: 40px;
        margin-bottom: 25px;
    }
    @media (max-width: 500px) {
        font-size: 16px;
        padding: 0 calc(19px - 8px);
        height: 30px;
        margin-bottom: 20px;
    }

    &:first-child {
        margin-top: 10px;
    }
    &:last-child {
        border: none;
    }

    span {
        &:nth-child(1) {
            flex: 70%;
            color: #FFF;
        }
        &:nth-child(2) {
            flex: 20%;
            color: #72EFDB;
            margin-right: 40px;
        }
        &:nth-child(3) {
            flex: 10%;
            color: #72EFDB;
        }
    }
`;