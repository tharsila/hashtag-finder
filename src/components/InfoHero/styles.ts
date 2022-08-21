import styled from 'styled-components';

export const ContentInfo = styled.div`
  color: #FFFFFF;
  padding-left: 135px;

  .space-top {
    padding-top: 135px;
  }

  h1 {
    font-size: 70px;
    font-weight: bold;
    width: 55%;
    margin-bottom: 30px;
  }

  p {
    font-size: 31px;
    font-weight: 400;
    width: 50%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
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

  button {
    background: transparent;
    border: none;
    padding: 0 40px;
    cursor: pointer;
  }

  input {
    background: transparent;
    outline: none;
    border: none;
    width: 100%;
    font-size: 50px;
    color: #8D9DA2;
    opacity: 0.57;
  }

  input::placeholder {
    font-size: 50px;
    color: #8D9DA2;
    opacity: 0.57;
  }
`