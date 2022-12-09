import React from 'react'
import './style.css'

function Header({ title, classes, titleClasses, children }) {
    return (
        <header className={`title-container${classes ? ` ${classes}` : ''}`}>
            <h1 className={`title${titleClasses ? ` ${titleClasses}` : ''}`}>{title}</h1>
            { children }
        </header>
    )
}

export default Header