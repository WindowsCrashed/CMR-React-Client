import React from 'react'
import './style.css'

function Section({ title, children }) {
    return (
        <section>
            <h2>{title}</h2>
            <div className='subsection-divider'>
                { children }
            </div>
        </section>
    )
}

export default Section