import React from 'react'

function TableRow({values}) {    
    return (
        <tr>{values.map((v, index) => <td key={index}>{v}</td>)}</tr>
    )
}

export default TableRow