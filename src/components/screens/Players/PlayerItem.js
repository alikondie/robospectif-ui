import React from 'react';
import { Link } from 'react-router-dom';
const PlayerItem = (props) => {
  if (props.isUpload)
    return (
      <div>
        <Link to={`/upload/edit-player/${props.id}`}>
          <h1>{props.name}</h1>
        </Link>
      </div>
    );
  else
    return (
      <div>
        <Link to={`/create/edit-player/${props.id}`}>
          <h1>{props.name}</h1>
        </Link>
      </div>
    );
};

export default PlayerItem;
