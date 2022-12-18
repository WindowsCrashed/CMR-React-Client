import React from 'react'
import { useLocation } from 'react-router-dom'
import PieceRow from './components/piece-row'
import ListPage from '../../templates/list-page'
import useApi from '../../hooks/useApi'

function Pieces() {
    const { data, loaded } = useApi('pieces', useLocation().search.substring(3))

    return (
        loaded &&

        <ListPage title='Find a piece in our repository'
            tableData={{
                headers: ['Composer', 'Name', 'Catalog', 'Key'],
                row: PieceRow,
                data: data
            }}/>
    )
}
 
export default Pieces
