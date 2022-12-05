import React from 'react'
import { Link } from 'react-router-dom'
import TableRow from '..'

function PieceRow({values}) {
    const { id, composer, composerId, name, catalog, tonality } = values

    const trValues = [
        <Link to={`/${composerId}`}>{composer}</Link>,
        <Link to={`/${id}`}>{name}</Link>,
        catalog,
        tonality
    ]

    return (
        <TableRow keyId={id} values={trValues}/>
    )
}

export default PieceRow