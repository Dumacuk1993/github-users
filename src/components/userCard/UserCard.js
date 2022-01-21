import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserRepos } from "../../actions/users";
import { useParams, useNavigate } from "react-router-dom";
import "./userCard.css";
import Page404 from "../Error/Page404";
import Loading from "../Loading/Loading";
import UserRepos from "../UserRepos/UserRepos";
import Button from "@mui/material/Button";

const UserCard = () => {
  const dispatch = useDispatch();
  const { user, repos, isFetching } = useSelector((state) => state.users);
  const { userLogin } = useParams();

  useEffect(() => {
    dispatch(getUser(userLogin));
    dispatch(getUserRepos(userLogin));
  }, [userLogin]);

  if (isFetching) {
    return <Loading />;
  }

  if (user.length === 0) {
    return <Page404 />;
  }

  return (
    <>
      <View user={user} repos={repos} />
    </>
  );
};

export default UserCard;

const View = ({ user, repos }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="card-header">{user.login}</div>
      <div className="card">
        <div className="card-info">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="card-info__img"
          />
          <div className="card-info__name">{user.name}</div>
          <a href={user.html_url} className="card-info__link">
            GitHub
          </a>
          <Button onClick={() => navigate(-1)} variant="outlined">
            Назад
          </Button>
        </div>
        <div className="card-repos">
          <div className="card-repos__title">
            Недавно обнавленные репозитории
          </div>
          <div className="card-repos__items">
            {repos.map(
              (repo, i) => i < 10 && <UserRepos key={repo.id} repo={repo} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
