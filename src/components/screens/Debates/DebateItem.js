import React from 'react';
import { Link } from 'react-router-dom';
const DebateItem = (props) => {
  if (props.isUpload)
    return (
      <div>
        <Link to={`/upload/edit-debate/${props.id}`} turn={props.turn}>
          <h1>Debat n° {props.id}</h1>
        </Link>
      </div>
    );
  else
    return (
      <div>
        <Link to={`/create/edit-debate/${props.id}`} turn={props.turn}>
          <h1>Debate n° {props.id}</h1>
        </Link>
      </div>
    );
};

export default DebateItem;
