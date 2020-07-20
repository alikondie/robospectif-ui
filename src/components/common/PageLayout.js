import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const Content = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  margin-top: 10%;
  margin-bottom: 10%;
  justify-content: start;
  align-content: center;
  font-family: "Open Sans";
  flex-shrink: 1;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  width: 99vw;
`;

export const PageLayout = ({ children }) => {
  return (
    <PageWrapper>
      <Header></Header>
      <Content>{children}</Content>
    </PageWrapper>
  );
};
