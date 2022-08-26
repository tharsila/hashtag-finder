import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(10,23,68,1) 35%, rgba(11,42,139,1) 100%);

    @media(max-width: 1200px) {
        #aboutTitle {
            font-size: 40px;
        }
        #aboutText {
            font-size: 16px;
        }
        #whoWeAreTitle {
            font-size: 35px;
        }
    }
`;

export const AboutArea = styled.div`
    margin: auto;
    padding-top: 200px;
    max-width: 1300px;
    width: 90%;
    display: flex;
    flex-direction: column;

    #aboutIlustration {
        margin-top: 50px;
        max-width: 600px;
        width: 45%;
    }
`;

export const AboutProject = styled.div`
    display: flex;
    gap: 80px;

    @media(max-width: 1100px) {
        flex-direction: column;

        #aboutText {
            width: 100%;
            max-width: initial;
        }
        #aboutIlustration {
            width: 70%;
            align-self: center;
        }
    }
    @media(max-width: 700px) {
        #aboutIlustration {
            margin-top: 30px;
            width: 100%;
            align-self: center;
        }
    }
`;

export const Title = styled.span(({ fontSize, fontColor }: { fontSize: number, fontColor: string }) => (`
    font-size: ${fontSize}px;
    color: ${fontColor};
    font-weight: 700;
`));

export const Text = styled.p(({ fontSize, lineHeight, marginTop }: { fontSize: number, lineHeight: number, marginTop: number }) => (`
    max-width: 600px;
    display: flex;
    font-size: ${fontSize}px;
    margin-top: ${marginTop}px;
    font-weight: 400;
    line-height: ${lineHeight};
    color: #FFF;
`));

export const WhoWeAre = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    padding: 50px;

    @media (max-width: 600px) {
        padding: 0;
    }
`

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 150px;
    gap: 45px;
    @media (max-width: 1280px) {
        flex-wrap: wrap;
    }
`;

export const Card = styled.div`
    max-width: 266px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0B1A49;
    border: 1px solid #FFFFFF24;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px #5538EE14;
    padding: 2.5%;
    text-align: center;

    @media (max-width: 600px) {
        max-width: initial;
        width: 100%;
        padding: 10%;
    }
    @media (min-width: 601px) and (max-width: 769px) {
        max-width: initial;
        width: 80%;
        padding: 10%;
    }   
    @media (min-width: 1280px) {
        width: 25%;
    }
`;

export const Avatar = styled.img`
    width: 70%;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    margin-top: 20px;

    a {
        height: 100%;
        &:nth-child(2) {
            margin: 0 20px;
        }

        img {
            height: 100%;
        }
    }
`;