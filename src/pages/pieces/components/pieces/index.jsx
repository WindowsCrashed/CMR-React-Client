import React, { Component } from 'react'
import '../style.css'
import SearchBar from '../../../global/components/searchbar'
import Table from '../../../global/components/table'
import PieceRow from '../../../global/components/table/table-row/piece-row'

class Pieces extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <main className="content content-pieces">
                    <div className="title-container">
                        <h1 className="title">Find a piece in our repository</h1>
                    </div>    
                    <div className="search-container" id="search-piece">
                        <SearchBar/>
                    </div>
                    <div className="table-container" id="piece-table">
                        <Table row={PieceRow} route={"pieces"}/>   
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
 
export default Pieces
