import React from 'react'
import './style.css'

function Header({ title, border }) {
    return (
        <header className={`title-container${border ? ' border-bottom' : ''}`}>
            <h1 className="title">{title}</h1>
        </header>
    )
}

export default Header