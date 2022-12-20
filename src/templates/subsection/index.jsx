import React from 'react'
import './style.css'

function SubSection({ title, children }) {
    return (
        <div>
            <h3>{title}</h3>
            { children }
        </div>
    )
}

export default SubSection