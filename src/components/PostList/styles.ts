import styled from 'styled-components';

type PropsImage = {
  showImage:boolean;
}

type PropsTweet = {
  showTweet:boolean;
}

type PropsContainer = {
  showImage:boolean;
  showTweet:boolean;
}

export const PostContainer = styled.section(({showImage, showTweet}:PropsContainer) => (
  `
  background: #0A1744;
  padding: 150px 0;
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
  padding: 0px 140px;
  margin-top: 100px;
  @media(max-width: 1150px) {
    justify-content: center;
    padding: 0px 20px;
  }

  @media(max-width: 500px) {
    margin-top: 70px;
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

export const TwitterInfo = styled.div`
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