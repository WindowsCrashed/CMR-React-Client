import React from 'react'
import { useLocation } from 'react-router-dom'
import ComposerRow from './components/composer-row'
import ListPage from '../../templates/list-page'
import useApi from '../../hooks/useApi'

function Composers() {
    const { data, loaded } = useApi('composers', useLocation().search.substring(3))
    
    return (
        loaded &&

        <ListPage title='Find a composer in our repository'
            tableData={{
                headers: ['Last Name', 'Name', 'Nationality', 'Musical Period'],
                row: ComposerRow,
                data: data
            }}/>
    )
}
 
export default Composers