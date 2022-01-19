import React from 'react'
import './userRepos.css'

const UserRepos = ({repo}) => {
    return (
        <div className='repo-item'>
            <a href={repo.html_url} target='_blank' className="repo-item__name">{repo.name}</a>
            <div className="repo-item__descr">{repo.description}</div>
            <div className="repo-item__language">{repo.language ? `Язык: ${repo.language}` : 'Язык: Не определён'}</div>
            <div className="repo-item__updated">{repo.updated_at}</div>
        </div>
    )
}

export default UserRepos
