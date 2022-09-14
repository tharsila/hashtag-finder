import styled from 'styled-components';

export const Charge = styled.div`
  
  .charge {
    margin: 0 0 2em;
    height: 100px;
    width: 20%;
    text-align: center;
    padding: 1em;
    margin: 0 auto 1em;
    display: inline-block;
    vertical-align: top;
    z-index: 10000;

    svg path,
    svg rect {
    fill: #000000;
    }

    @media screen and (max-width: 500px) {
      background: #0A1744;
      height: max-content;
      width: 100%;
      border-radius: 15px;
      padding: 0.5em;
      margin-top: 20px;
    }

  }

  
`