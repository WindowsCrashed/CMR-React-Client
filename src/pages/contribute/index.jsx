import React from 'react'
import Header from '../../templates/header'
import './style.css'

function Contribute() {
    return (
        <main className="content content-contribute">
            <Header title='Make a contribution to our repository' titleClasses='title-lg mb-70'/>
            <div className="btn-container">
                <a className="button btn-primary" href="add-piece">Add a new piece</a>
                <a className="button btn-primary" href="add-composer">Add a new composer</a>
            </div>
        </main>
    )
}
 
export default Contribute