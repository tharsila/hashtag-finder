import styled from 'styled-components';
import background from '../../images/hero-bg.jpg';
import mobile from '../../images/mobileHeroBg.jpg';
import { InfoTweet } from './index'

export const Container = styled.div `
  background-image: url(${background});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bgResponse{
    justify-content: center;
    display: flex;
    padding-top: 60px;
    z-index: 2000;
    width: 100%;
    height: 200px;
    background: #0A1744;
  }
  

  .bgLoader{
    width: 100%;
    justify-content: center;
    display: flex;  
    margin-bottom: 200px;
  } 

  .textResponse{
    font-size: 24px;
    display: flex;
    justify-content: center;
    margin: 5px;
    text-align: center;
  }

  @media(max-width: 500px){
    background-image: url(${mobile});
  }
`

export const ContentInfo = styled.div`
  margin: 50px auto;
  color: #FFFFFF;
  max-width: 1300px;
  width: 95%;

  @media(max-width: 990px) {
    padding: 25px;
  }

  @media(max-width: 500px) {
    width: 100%;
  }

  .space-top {
    padding-top: 135px;
  }

  h1 {
    font-size: 70px;
    font-weight: bold;
    width: 60%;
    margin-bottom: 30px;
    
    @media(max-width: 990px) {
      width: 100%;
    }

    @media(max-width: 500px) {
      width: 100%;
      font-size: 36px;
    }
  }

  p {
    font-size: 31px;
    font-weight: 400;
    width: 55%;

    @media(max-width: 990px) {
      width: 100%;
    }
    @media(max-width: 500px) {
      font-size: 16px;
      width: 90%;
    }
  }
`


export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 180px; */
  padding: 150px 20px 100px;

 
  @media(max-width: 500px) {
    padding-top: 100px;
  }
`

export const Input = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #1E3E7B;
  border-radius: 72px;
  padding: 15px;
  max-width: 700px;
  width: 100%;

  @media(max-width: 500px) {
    padding: 15px;
  }

  button {
    background: transparent;
    border: none;
    padding: 0 40px;
    cursor: pointer;
    @media(max-width: 500px) {
      padding: 0 20px;
      }

    img {
      @media(max-width: 500px) {
        width: 10px;
      }
    }
  }

  input {
    background: transparent;
    outline: none;
    border: none;
    width: 100%;
    font-size: 50px;
    color: #8D9DA2;
    opacity: 0.57;
    @media(max-width: 500px) {
      font-size: 17px;
    }
  }

  input::placeholder {
    font-size: 50px;
    color: #8D9DA2;
    opacity: 0.57;

    @media(max-width: 500px) {
      font-size: 17px;
    }
  }
`

type PropsImage = {
  showImage:boolean;
}

type PropsTweet = {
  showTweet:boolean;
}

type PropsContainer = {
  showImage:boolean;
  showTweet:boolean;
  tweets: InfoTweet[];
}


export const PostContainer = styled.section(({tweets, showImage, showTweet}:PropsContainer) => (
  `
  background: #0A1744;
  padding: 150px 0;
  display: ${tweets.length > 0 ? 'block' : 'none'};

  @media(max-width: 500px) {
    padding-top: 50px;
  }

  h3 {
    text-align: center;
    color: #FFFFFF;
    font-size: 32px;
    font-weight: 500;

    @media(max-width: 1150px) {
      display: none;
    }
  }

  .choose {
    display: none;
    padding: 0 25px;

    @media(max-width: 1150px) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      span {
        padding-bottom: 10px;
      }

      span:first-child {
        border-bottom: ${showTweet  ? '3px' : '1px'} solid ${showTweet ? '#72EFDB' : '#41558E'};
        width: 100%;
        color:${showTweet ? '#72EFDB' : '#FFFFFF'};
      }

      span:last-child {
        border-bottom: ${showImage ? '3px' : '1px'} solid ${showImage ? '#72EFDB' : '#41558E'};
        width: 100%;
        color:${showImage ? '#72EFDB' : '#FFFFFF'};
       
      }
    }
  }
`
))

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 0px 70px;
  /* margin-top: 100px; */
  margin: 100px auto 0;
  max-width: 1300px;
  @media(max-width: 1150px) {
    justify-content: center;
    padding: 0px 20px;
  }

  @media(max-width: 500px) {
    margin-top: 70px;
  }

  /* LOADER */
  .bgLoader{
    width: 100%;
    justify-content: center;
    display: flex;
    margin-bottom: 200px;
  } 

`

export const PostGrid = styled.div(({showImage}:PropsImage) => (
  `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  height: 100%;
  @media(max-width: 1150px) {
    display: ${showImage ? 'grid' : 'none'};
    
  }
`
))

export const PostImg = styled.div`
  position: relative;
  height: 100%;
  
  img {
    width: 230px;
    height: 230px;
    border-radius: 21px;

    @media(max-width: 500px) {
      width: 180px;
      height: 180px;
    }

    @media(max-width: 400px) {
      width: 150px;
      height: 150px;
    }
  }
`

export const TwitterInfo = styled.a`
  position: absolute;
  bottom: 10px;
  left: 25px;

  @media(max-width: 400px) {
    left: 15px;
  }

  p {
    font-size: 17px;
    @media(max-width: 400px) {
      font-size: 10px;
    }
  }

  strong {
    font-weight: 500;
    @media(max-width: 400px) {
      font-size: 12px;
    }
  }

  p, strong {
    color: #FFFFFF;
  }
`

export const PostCardContainer = styled.div(({showTweet}:PropsTweet) => (
  `
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  @media(max-width: 1150px) {
    display: ${showTweet ? 'flex' : 'none'};
  }
`
))

export const PostCard = styled.div`
  background: #1E3E7B17 0% 0% no-repeat padding-box;
  border: 1px solid #FFFFFF24;
  border-radius: 15px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;

  @media(max-width: 500px) {
    padding: 20px;
    border-radius: 5px;
  }

  img {
    width: 82px;
    height: 82px;
    border-radius: 50%;

    @media(max-width: 500px) {
      width: 60px;
      height: 60px;
    }
  }

  .userInfo {
    strong, span {
      color: #FFFFFF;
    }

    strong {
      font-size: 20px;
      margin-right: 17px;
      @media(max-width: 500px) {
        font-size: 12px;
      }
    }

    span {
      opacity: 0.43;
      @media(max-width: 500px) {
        font-size: 8px;
      }
    }

    p {
      color: #D9D9D9;
      font-size: 19px;
      margin-bottom: 1.5rem;
      @media(max-width: 500px) {
        font-size: 12px;
        margin: 10px 0;

      }
    }

    a {
      color: #72EFDB;
      font-size: 20px;
      @media(max-width: 500px) {
        font-size: 9px;
      }
    }
  }

`