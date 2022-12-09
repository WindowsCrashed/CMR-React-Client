import React from 'react'
import './style.css'
import SearchBar from '../../templates/searchbar'
import Header from '../../templates/header'
import Subtitle from './components/subtitle'
import MusicLogo from '../../assets/imgs/msc.svg'

function Home() {
    return (
        <main className="content content-main">
            <Header title='Classical Music Repository' classes='mt-55' titleClasses='brand title-brand m-none'>
                <Subtitle subtitle='The place to find music that never gets old'/>
            </Header>
            <SearchBar/>
            <div className="img-container">
                <img className="img" src={MusicLogo} alt="music"/>
            </div>
        </main>
    )
}

export default Home