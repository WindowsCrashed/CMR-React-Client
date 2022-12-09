import React, { Component } from 'react'
import './style.css'

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div className="content content-login">
                <header className="title-container">
                    <h1 className="title">Log in</h1>
                </header>
                <main>
                    <form>
                        <div className="input-container">
                            <label>
                                <span>Email or username</span>
                                <input name="name" type="text"/>
                            </label>
                            <label>
                                <span>Password</span>
                                <input name="name" type="password"/>
                            </label>
                        </div>
                        <div className="btn-container">
                            <button className="button btn-success">Log in</button>
                            <button className="button btn-primary">Create account</button>
                        </div>
                    </form>
                </main>
            </div>
        )
    }
}
 
export default Login