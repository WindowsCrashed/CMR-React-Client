import React from 'react'

function TableBody({ row: Row, data}) {
    return (
        <tbody>
            {data.map((item, index) => <Row key={index} values={item}/>)}
        </tbody>
    )
}

export default TableBody