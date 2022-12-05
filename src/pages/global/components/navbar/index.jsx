import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import SearchBar from '../searchbar'

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav>
                    <div className="navbar">
                        <div className="nav-left">
                            <div className="brand">
                                <Link className="button" to="/">Classical Music Repository</Link>
                            </div>
                            <div className="navigation">
                                <ul>
                                    <li>
                                        <Link className="button nav-btn" to="/pieces">Pieces</Link>
                                    </li>
                                    <li>
                                        <Link className="button nav-btn" to="/composers">Composers</Link>
                                    </li>
                                    <li>
                                        <Link className="button nav-btn" to="/contribute">Contribute</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-right">
                            <SearchBar/>
                            <div className="login">
                                <Link className="button nav-btn" to="/login">Log in</Link>
                            </div>
                        </div>
                    </div>    
                </nav>
            </React.Fragment>
        )
    }
}
 
export default NavBar