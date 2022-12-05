import React from 'react'
import { Link } from 'react-router-dom'
import TableRow from '../../../global/components/table/table-row'

function ComposerRow({values}) {
    const {id, name, lastName, nationality, period } = values

    const trValues = [
        <Link to={`/composers/${id}`}>{lastName}</Link>,
        <Link to={`/composers/${id}`}>{name}</Link>,
        nationality,
        period
    ]

    return (
        <TableRow keyId={id} values={trValues}/>
    )
}

export default ComposerRow