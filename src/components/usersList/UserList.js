import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/users";
import User from "../User/User";
import Button from "@mui/material/Button";
import "./userList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [min, setMin] = useState(-1);
  const [max, setMax] = useState(9);

  useEffect(() => {
    dispatch(getUsers(max));
  }, [min, max]);

  const nextUsers = (min, max) => {
    if (max <= users.length) {
      setMin((min) => min + 9);
      setMax((max) => max + 9);
    }
  };

  const prevUsers = (min, max) => {
    if (min > -1) {
      setMin((min) => min - 9);
      setMax((max) => max - 9);
    }
  };

  return (
    <>
      <h1>Пользователи GitHub</h1>
      <div className="inner">
        <div className="user-list">
          {users.map(
            (user, i) =>
              i < max && i > min && <User key={user.id} user={user} />
          )}
        </div>
        <div className="buttons">
          <Button
            variant="outlined"
            disabled={min < 0}
            onClick={() => prevUsers(min, max)}
          >
            Назад
          </Button>
          <Button
            variant="outlined"
            disabled={max > users.length}
            onClick={() => nextUsers(min, max)}
          >
            Далее
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserList;
