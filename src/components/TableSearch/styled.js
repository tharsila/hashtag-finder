import styled from 'styled-components';

export const SubTitle = styled.h2`
  font-size: 33px;
  color: #72efdb;
  text-align: center;

  @media (min-width: 1553px) {
    font-size: 40px;
    text-align: left;
  }
`;

export const Table = styled.table`
  width: 100%;
  max-width: 1553px;
  margin: 0 auto;
  border-radius: 14px;
  background-color: #18326b;
  border-collapse: collapse;
  overflow: hidden;

  @media (min-width: 1553px) {
    th,
    td {
      font-size: 24px;
      text-align: center;
    }
  }
`;

export const Tbody = styled.tbody`
  background-color: #14397e;
`;

export const Tr = styled.tr`
  display: flex;
  text-align: right;
  border-bottom: 1px solid #41558e;

  && {
    th:first-child,
    td:first-child {
      text-align: left;
    }
    :last-of-type {
      border-bottom: none;
    }
  }
`;

export const Th = styled.th`
  justify-content: flex-end;
  color: #72efdb;
  font-size: 17px;
  padding: 18px 16px 11px 19px;
`;

export const Td = styled.td`
  padding: 10px 17px;
  color: #72efdb;
  font-size: 14px;
  && {
    :first-child {
      color: #fcfcfc;
    }
  }
`;
