import React from 'react'

function TableRow({values, keyId}) {    
    return (
        <tr key={keyId}>
            {values.map((v, index) => <td key={index}>{v}</td>)}
        </tr>
    )
}

export default TableRow