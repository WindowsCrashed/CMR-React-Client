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
                    <div class="navbar">
                        <div class="nav-left">
                            <div class="brand">
                                <Link class="button" nav-btn to="/">Classical Music Repository</Link>
                            </div>
                            <div class="navigation">
                                <ul>
                                    <li>
                                        <Link class="button nav-btn" nav-btn to="/pieces">Pieces</Link>
                                    </li>
                                    <li>
                                        <Link class="button nav-btn" nav-btn to="/composers">Composers</Link>
                                    </li>
                                    <li>
                                        <Link class="button nav-btn" nav-btn to="/contribute">Contribute</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="nav-right">
                            <SearchBar/>
                            <div class="login">
                                <Link class="button nav-btn" nav-btn to="/login">Log in</Link>
                            </div>
                        </div>
                    </div>    
                </nav>
            </React.Fragment>
        )
    }
}
 
export default NavBar