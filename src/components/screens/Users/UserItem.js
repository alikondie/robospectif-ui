import React from "react";
import { Link } from "react-router-dom";
import { Item, StyledLink } from "../../common";
const UserItem = (props) => {
  return (
    <StyledLink style={{ color: "black" }} to={`/edit/user/${props._id}`}>
      <p>
        {props.firstName} {props.lastName}
      </p>
    </StyledLink>
  );
};

export default UserItem;
