import React from 'react';
import { Link } from 'react-router-dom';
const TurnItem = (props) => {
  if (props.isUpload)
    return (
      <div>
        <Link to={`/upload/edit-turn/${props.no}`}>
          <h1>Tour n° {props.no}</h1>
        </Link>
      </div>
    );
  else
    return (
      <div>
        <Link to={`/create/edit-turn/${props.no}`}>
          <h1>Tour n° {props.no}</h1>
        </Link>
      </div>
    );
};

export default TurnItem;
