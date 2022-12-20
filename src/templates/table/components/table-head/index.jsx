import React from 'react'

function TableHead({values}) {
    return (
        <thead>
            <tr>
                {values.map((v, index) => <th key={index}>{v}</th>)}
            </tr>
        </thead>
    )
}

export default TableHead