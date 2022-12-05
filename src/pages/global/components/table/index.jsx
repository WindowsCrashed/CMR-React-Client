import React from 'react'
import './style.css'
import TableHead from './table-head'
import TableBody from './table-body'

function Table({ row: Row, route }) {
    return (
        <table className='table'>
            <TableHead values={['Composer', 'Name', 'Catalog', 'Key']}/>
            <TableBody row={Row} route={route}/>
        </table>
    )
}

export default Table