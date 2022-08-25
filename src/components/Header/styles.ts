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
    height: 90vh;
  }
`
export const HeaderBG = styled.header`
 /*  background: #0A1744; */
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

export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  a:first-child {
    background:  #72EFDB;
    color: #0B1741;
  }

  a:last-child {
    background: #1E3E7B;
    color: #FFFFFF;
  }

  a:first-child, a:last-child {
    padding: 10px 25px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 2.55px;

    @media(max-width: 700px) {
      padding: 8px 18px;
      font-size: 15px;
    }

    @media(max-width: 500px) {
      font-size: 10px;
    }
  }

  img {
    margin-right: 15px;
    @media(max-width: 500px) {
      width: 10px;
    }

    @media(max-width:390px) {
      display: none;
    }
  }
`