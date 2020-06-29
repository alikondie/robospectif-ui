import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Content = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: 'Open Sans';
`;

export const PageLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Content>{children}</Content>
    </>
  );
};
