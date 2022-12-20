import React from 'react'
import './style.css'

function SearchBar({ value, onChange, buttonDisabled }) {
    return (
        <div className="search-container">
            <form action="" className="search">
                <input name="s" value={value} onChange={e => onChange(e.target.value)}/>
                <button disabled={buttonDisabled}><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}
 
export default SearchBar