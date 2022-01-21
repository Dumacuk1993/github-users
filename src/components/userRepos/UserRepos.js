import React from "react";
import "./userRepos.css";

const UserRepos = ({ repo }) => {
  const time = new Date(repo.updated_at);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "UTC",
  };

  const timeFormat = `Обнавлено ${new Intl.DateTimeFormat(
    "ru-RU",
    options
  ).format(time)}`;

  return (
    <div className="repo-item">
      <a href={repo.html_url} target="_blank" className="repo-item__name">
        {repo.name}
      </a>
      <div className="repo-item__descr">{repo.description}</div>
      <div className="repo-item__language">
        {repo.language ? `Язык: ${repo.language}` : "Язык: Не определён"}
      </div>
      <div className="repo-item__updated">{timeFormat}</div>
    </div>
  );
};

export default UserRepos;
