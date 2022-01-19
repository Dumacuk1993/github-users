import React from 'react'
import { Link } from 'react-router-dom'
import './404.css'

const Page404 = () => {
    
    return (
        <div className='error'>
            <div className="error-title">Такой страницы не существует</div>
            <Link className='error-link' to='/'>Вернуться в меню</Link>
        </div>
    )
}

export default Page404
