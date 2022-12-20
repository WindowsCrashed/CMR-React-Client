import React from 'react'
import './style.css'
import TableHead from './components/table-head'
import TableBody from './components/table-body'

function Table({ row: Row, headers, data }) {    
    return (
        <table className='table'>
            <TableHead values={headers}/>
            <TableBody row={Row} data={data}/>
        </table>
    )
}

export default Table