import React, { Component } from 'react'
import '../style.css'
import SearchBar from '../../../global/components/searchbar'
import Table from '../../../global/components/table'
import PieceRow from '../piece-row'

class Pieces extends Component {
    state = {  } 
    render() { 
        return (
            <main className="content content-pieces">
                <div className="title-container">
                    <h1 className="title">Find a piece in our repository</h1>
                </div>    
                <div className="search-container">
                    <SearchBar/>
                </div>
                <div className="table-container">
                    <Table row={PieceRow} route={'pieces'}/>   
                </div>
            </main>
        )
    }
}
 
export default Pieces
