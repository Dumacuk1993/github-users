import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

const User = (props) => {
  const user = props.user;

  return (
    <div className="user">
      <img className="user-img" src={user.avatar_url} alt="" />
      <div className="user-content">
        <div className="user-content__name">{user.login}</div>
        <div className="user-content__type">{user.type}</div>
        <Link to={`/${user.login}`}>Профиль</Link>
      </div>
    </div>
  );
};

export default User;
