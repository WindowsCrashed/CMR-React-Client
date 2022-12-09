import React from 'react'
import './style.css'
import Header from '../header'
import SearchBar from '../searchbar'
import Table from '../table'

function ListPage({ title, tableData }) {
    return (
        <div className="content content-list">
            <Header title={title} titleClasses='title-lg mb-70'/>
            <SearchBar/>
            <div className="table-container">
                <Table {...tableData}/>   
            </div>
        </div>
    )
}

export default ListPage