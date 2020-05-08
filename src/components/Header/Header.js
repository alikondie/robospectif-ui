import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <h1>Robospectif</h1>
      <Link to='/general-infos'>
        <p>Informations Générales</p>
      </Link>
      <Link to='/player-spec'>
        <p>Caractéristiques des joueurs</p>
      </Link>
    </header>
  );
};

export default Header;
