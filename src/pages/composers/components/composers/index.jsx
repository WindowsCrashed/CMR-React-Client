import React, { Component } from 'react'
import '../style.css'
import SearchBar from '../../../global/components/searchbar'
import Table from '../../../global/components/table'
import ComposerRow from '../composer-row'

class Composers extends Component {
    state = {  } 
    render() { 
        return (
            <main className="content content-composers">
                <div className="title-container">
                    <h1 className="title">Find a composer in our repository</h1>
                </div>    
                <div className="search-container">
                    <SearchBar/>
                </div>
                <div className="table-container">
                    <Table row={ComposerRow} route={'composers'}/>
                </div>
            </main>
        )
    }
}
 
export default Composers