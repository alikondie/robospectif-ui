import React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #141e30, #243b55);
  border-bottom: 3px solid #4286f4;
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? 'block' : 'none')};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background: white;

  @media (min-width: 768px) {
    display: flex;
    left: initial;
    top: initial;
    background: none;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
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
  padding: auto;
  margin: auto 0 auto 0;
  color: white;
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
    </HeaderWrapper>
  );
};

export default Header;
