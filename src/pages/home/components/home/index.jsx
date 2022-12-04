import React from 'react'
import '../style.css'
import SearchBar from '../../../global/components/searchbar'
import MusicLogo from '../../../../assets/imgs/msc.svg'

function Home() {
    return (
        <React.Fragment>
            <main class="content content-main">
                <div class="title-container">
                    <h1 class="brand title">Classical Music Repository</h1>
                </div>
                <div class="subtitle-container">
                    <h2 class="subtitle">The place to find music that never gets old</h2>
                </div>
                <div class="search-container">
                    <SearchBar/>
                </div>
                <div class="img-container">
                    <img class="img" src={MusicLogo} alt="music"/>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Home