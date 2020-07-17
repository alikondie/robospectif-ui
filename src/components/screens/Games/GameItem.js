import React from "react";
import { Link } from "react-router-dom";
const GameItem = (props) => {
  return (
    <div>
      <Link to={`/create/general-infos`}>
        <h1>Partie {props.context}</h1>
      </Link>
    </div>
  );
};

export default GameItem;
