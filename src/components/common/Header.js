import React from "react";
import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from "styled-components";
import RobospectifIcon from "../../resources/images/icon.png";
const HeaderWrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1% 16px;
  min-height: 100vh;
  position: fixed;
  overflow: auto;
  flex-grow: 0;
  top: 0;

  background-image: linear-gradient(45deg, #466d86, #3e515e);
  border-bottom: 3px solid #4286f4;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;

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

export const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0 auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: white;
  text-decoration: none;
`;

const UserProfileLink = styled(Link)`
  color: black;
  position: fixed;
  right: 0;
  top: 0;
  margin: 10px 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px 10%;
  border-bottom: 1px solid #58647a;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 1px 40%;
`;

const Title = styled.h1`
  width: 80%;
  order: 2;
  color: white;
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
      <TitleWrapper>
        <Title>Robospectif</Title>
        <Icon src={RobospectifIcon} alt="Robospectif icon" />
      </TitleWrapper>

      <Menu>
        <StyledLink to="/">
          <p>Tableau de bord</p>
        </StyledLink>
        <StyledLink to="/users">
          <p>Consulter les collaborateurs</p>
        </StyledLink>
        <StyledLink to="/games">
          <p>Consulter les parties</p>
        </StyledLink>
        <StyledLink to="/upload">
          <p>Ajouter à partir d'un fichier</p>
        </StyledLink>
        <StyledLink to="/create/general-infos">
          <p>Ajouter une partie</p>
        </StyledLink>
      </Menu>
      <UserProfileLink to="/users">Taki Eddine Yamani</UserProfileLink>
      <CopyRight>© Created by Takie Yamani</CopyRight>
    </HeaderWrapper>
  );
};

export default Header;
