import React from 'react'
import '../style.css'
import SearchBar from '../../../global/components/searchbar'
import MusicLogo from '../../../../assets/imgs/msc.svg'

function Home() {
    return (
        <React.Fragment>
            <main className="content content-main">
                <div className="title-container">
                    <h1 className="brand title">Classical Music Repository</h1>
                </div>
                <div className="subtitle-container">
                    <h2 className="subtitle">The place to find music that never gets old</h2>
                </div>
                <div className="search-container">
                    <SearchBar/>
                </div>
                <div className="img-container">
                    <img className="img" src={MusicLogo} alt="music"/>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Home