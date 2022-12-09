import React from 'react'
import Header from '../header'
import './style.css'

function InfoPage({ title, children }) {
    return (
        <div className="content content-info">
            <Header title={title} border={true}/>
            <main className='section-divider'>
                { children }
            </main>
        </div>
    )
}

export default InfoPage