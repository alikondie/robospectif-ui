import React from 'react';
import { Link } from 'react-router-dom';
const PlayerItem = (props) => (
  <div>
    <Link to={`/upload/edit-player/${props.id}`}>
      <h1>{props.name}</h1>
    </Link>
  </div>
);

export default PlayerItem;
