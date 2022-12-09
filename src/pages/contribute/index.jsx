import React, { Component } from 'react'
import './style.css'

class Contribute extends Component {
    state = {  } 
    render() { 
        return (
            <main className="content content-contribute">
                <div className="title-container">
                    <h1 className="title">Make a contribution to our repository</h1>
                </div>
                <div className="btn-container">
                    <a className="button btn-primary" href="add-piece">Add a new piece</a>
                    <a className="button btn-primary" href="add-composer">Add a new composer</a>
                </div>
            </main>
        )
    }
}
 
export default Contribute