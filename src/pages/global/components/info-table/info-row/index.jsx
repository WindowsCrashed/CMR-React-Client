import React from 'react'

function InfoRow({label, value}) {        
    return (
        <tr>
            <th>{label}</th>
            <td>{value}</td>
        </tr>
    )
}

export default InfoRow