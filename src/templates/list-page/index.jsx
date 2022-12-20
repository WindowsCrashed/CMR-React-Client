import React, { useState } from 'react'
import './style.css'
import Header from '../header'
import SearchBar from '../searchbar'
import Table from '../table'
import useApi from '../../hooks/useApi'

function ListPage({ title, route, tableData }) {
    const [query, setQuery] = useState('')
    const { data, loaded } = useApi(route, query)

    const onChange = e => setQuery(e)

    return (
        <div className="content content-list">
            <Header title={title} titleClasses='title-lg mb-70'/>
            <SearchBar value={query} onChange={onChange} buttonDisabled={true}/>
            {
                loaded &&
                <div className="table-container">
                    <Table {...tableData} data={data}/>   
                </div>
            }
        </div>
    )
}

export default ListPage