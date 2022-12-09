import React from 'react'
import './style.css'
import SearchBar from '../../templates/searchbar'
import Header from '../../templates/header'
import MusicLogo from '../../assets/imgs/msc.svg'

function Home() {
    return (
        <main className="content content-main">
            <Header title='Classical Music Repository' brand={true}>
                <div className="subtitle-container">
                    <h2 className="subtitle">The place to find music that never gets old</h2>
                </div>
            </Header>
            <div className="search-container">
                <SearchBar/>
            </div>
            <div className="img-container">
                <img className="img" src={MusicLogo} alt="music"/>
            </div>
        </main>
    )
}

export default Home