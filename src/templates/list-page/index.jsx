import React from 'react'
import './style.css'
import Header from '../header'
import SearchBar from '../searchbar'
import Table from '../table'

function ListPage({ title, tableData }) {
    return (
        <div className="content content-list">
            <Header title={title}/>
            <div className="search-container">
                <SearchBar/>
            </div>
            <div className="table-container">
                <Table {...tableData}/>   
            </div>
        </div>
    )
}

export default ListPage