import styled from "styled-components";

type textProps = {

};

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(10,23,68,1) 35%, rgba(11,42,139,1) 100%);
`;

export const AboutArea = styled.div`
    margin: auto;
    padding-top: 100px;
    width: 95%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;

    #aboutIlustration {
        margin-top: 50px;
        max-width: 600px;
    }
`;

export const AboutProject = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.span(({ fontSize, fontColor, textIndent }: { fontSize: number, fontColor: string, textIndent: number }) => (`
    font-size: ${fontSize}px;
    color: ${fontColor};
    font-weight: 700;
    text-indent: ${textIndent}px;
`));

export const Text = styled.p(({ fontSize, lineHeight, marginTop }: { fontSize: number, lineHeight: number, marginTop: number }) => (`
    max-width: 600px;
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
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
    margin-bottom: 150px;
`;

export const Card = styled.div`
    max-width: 266px;
    height: 382px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0B1A49;
    border: 1px solid #FFFFFF24;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px #5538EE14;
    padding: 2.5%;
    text-align: center;
`;

export const Avatar = styled.img`
    width: 70%;
    border-radius: 50%;
    margin-bottom: 20px;
`;