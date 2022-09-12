import styled from 'styled-components';

type PropsTweet = {
  showTweet:boolean;
}


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

  a {
    text-decoration: none;
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

    a {
      opacity: 0.43;
      font-size: 20px;
      color: #FFFFFF;
      transition: 0.4s;

      @media(max-width: 500px) {
        font-size: 8px;
      }

      &:hover {
        filter: brightness(150%);
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

    a:last-child {
      opacity: 1;
      color: #72EFDB;
      font-size: 20px;
      @media(max-width: 500px) {
        font-size: 9px;
      }
    }
  }

`