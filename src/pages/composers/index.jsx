import React from 'react'
import ComposerRow from './components/composer-row'
import ListPage from '../../templates/list-page'

function Composers() {
    return (
        <ListPage title='Find a composer in our repository' route='composers/search'
            tableData={{
                headers: ['Last Name', 'Name', 'Nationality', 'Musical Period'],
                row: ComposerRow
            }}/>
    )
}
 
export default Composers