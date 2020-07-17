import React from "react";
import { Link } from "react-router-dom";
const UserItem = (props) => {
  return (
    <div>
      <Link to={`/edit/user/${props._id}`}>
        <h1>
          {props.firstName} {props.lastName}
        </h1>
      </Link>
    </div>
  );
};

export default UserItem;
