import React from 'react'
import { Link } from 'react-router-dom'
import TableRow from '../../../../templates/table/components/table-row'

function PieceRow({values}) {
    const { id, composer, composerId, name, catalog, tonality } = values

    const trValues = [
        <Link to={`/composers/${composerId}`}>{composer}</Link>,
        <Link to={`/pieces/${id}`}>{name}</Link>,
        catalog,
        tonality
    ]

    return (
        <TableRow values={trValues}/>
    )
}

export default PieceRow