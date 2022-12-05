import React, { Component } from 'react'
import './style.css'

class SearchBar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <form action="" className="search">
                    <input name="s" id=""/>
                    <button><i className="fa fa-search"></i></button>
                </form>
            </React.Fragment>
        )
    }
}
 
export default SearchBar