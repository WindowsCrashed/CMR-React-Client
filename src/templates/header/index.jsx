import React from 'react'
import './style.css'

function Header({ title, border, brand, children }) {
    return (
        <header className={`title-container${border?' border-bottom':''}`}>
            <h1 className={`title${brand?' brand':''}`}>{title}</h1>
            { children }
        </header>
    )
}

export default Header