import React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  height: 100vh;
  width: 15%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #141e30, #243b55);
  border-bottom: 3px solid #4286f4;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: none;
  background: none;
  position: relative;
  border-bottom: 1px solid #58647a;
  padding-bottom: 20px;
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0 auto 0;
  font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
  color: white;
  text-decoration: none;
`;

const Title = styled.h1`
  width: 100%;
  color: white;
  padding: 4px;
  border-bottom: 1px solid #58647a;
  padding-bottom: 20px;
`;

const CopyRight = styled.p`
  width: 20%;
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  margin-bottom: 20px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Robospectif</Title>
      <Menu>
        <StyledLink to='/general-infos'>
          <p>Partie</p>
        </StyledLink>
        <StyledLink to='/players'>
          <p>Joueurs</p>
        </StyledLink>
        <StyledLink to='/turns'>
          <p>Tours</p>
        </StyledLink>
      </Menu>
      <CopyRight>Created by Takie Yamani</CopyRight>
    </HeaderWrapper>
  );
};

export default Header;