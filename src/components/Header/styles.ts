import styled from 'styled-components';

export const Container = styled.div`
  background-image:url("/hero-bg.jpg");
  background-repeat:no-repeat;
  background-size: cover;
  

  @media(max-width: 950px) {
    background-image:url("/mobile-hero-bg.jpg");
  }
  
  @media(max-width: 500px) {
    background-image:url("/mobile-hero-bg.jpg");
  }
`
export const HeaderBG = styled.header`
  box-shadow: 0px 3px 29px #5538EE1F;
  backdrop-filter: blur(30px);
  color: #FFFFFF;
  height: 80px;
  position: fixed;
  top:0;
  z-index: 1000;
  width: 100%;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 55px;

  @media(max-width: 700px) {
    padding: 0 20px;
  }

  span {
    font-size: 35px;
    @media(max-width: 700px) {
      font-size: 25px;
    }
    @media(max-width: 500px) {
      font-size: 19px;
    }
  }
`

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