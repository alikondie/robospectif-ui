import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <h1>Robospectif</h1>
      <Link to='/general-infos'>
        <p>Partie</p>
      </Link>
      <Link to='/player-spec'>
        <p>Joueurs</p>
      </Link>
      <Link to='/turns'>
        <p>Tours</p>
      </Link>
    </header>
  );
};

export default Header;
