import styled from 'styled-components';

export const Container = styled.div`
  background-image:url("/hero-bg.jpg");
  background-repeat:no-repeat;
  background-size: cover;
  height: 100vh;
`
export const HeaderBG = styled.header`
  background: #0A1744;
  color: #FFFFFF;
  box-shadow: 0px 3px 29px #5538EE1F;
  height: 80px;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
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

  span {
    font-size: 35px;
  }
`

export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

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
  }

  img {
    margin-right: 15px;
  }
`