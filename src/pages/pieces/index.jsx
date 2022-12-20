import React from 'react'
import PieceRow from './components/piece-row'
import ListPage from '../../templates/list-page'

function Pieces() {
    return (
        <ListPage title='Find a piece in our repository' route='pieces/search'
            tableData={{
                headers: ['Composer', 'Name', 'Catalog', 'Key'],
                row: PieceRow
            }}/>
    )
}
 
export default Pieces
