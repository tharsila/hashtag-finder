import styled from 'styled-components';

export const PostContainer = styled.section`
  background: #0A1744;
  padding-top: 150px;

  h3 {
    text-align: center;
    color: #FFFFFF;
    font-size: 32px;
    font-weight: 500;
  }
`

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 0px 140px;
  margin-top: 100px;
`

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  height: 100%;
`

export const PostImg = styled.div`
  position: relative;
  height: 100%;

  img {
    width: 230px;
    height: 230px;
    border-radius: 21px;
  }
`

export const TwitterInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 25px;
  p {
    font-size: 17px;
  }

  strong {
    font-weight: 500;
  }

  p, strong {
    color: #FFFFFF;
  }
`

export const PostCardContainer =  styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`

export const PostCard = styled.div`
  background: #1E3E7B17 0% 0% no-repeat padding-box;
  border: 1px solid #FFFFFF24;
  border-radius: 15px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;

  img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
  }

  .userInfo {
    strong, span {
      color: #FFFFFF;
    }

    strong {
      font-size: 20px;
      margin-right: 17px;
    }

    span {
      opacity: 0.43;
    }

    p {
      color: #D9D9D9;
      font-size: 19px;
      margin-bottom: 1.5rem;
    }

    a {
      color: #72EFDB;
      font-size: 20px;
    }
  }

`