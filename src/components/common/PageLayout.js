import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const Content = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  width: 80%;
  margin-top: 2%;
  margin-bottom: 3%;
  justify-content: start;
  align-content: center;
  font-family: "Open Sans";
  flex-shrink: 1;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  width: 80%;
  margin-top: 10%;
  margin-bottom: 10%;
  justify-content: start;
  align-content: center;
  font-family: "Open Sans";
  flex-shrink: 1;
  flex-basis: 17%;
`;

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #eeeeee;
`;

export const PageLayout = ({ children }) => {
  return (
    <PageWrapper>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Content>{children}</Content>
    </PageWrapper>
  );
};
