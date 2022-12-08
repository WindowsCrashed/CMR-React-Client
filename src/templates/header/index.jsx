import React from 'react'
import './style.css'

function Header({ title }) {
    return (
        <header className="title-container border-bottom">
            <h1 className="title">{title}</h1>
        </header>
    )
}

export default Header