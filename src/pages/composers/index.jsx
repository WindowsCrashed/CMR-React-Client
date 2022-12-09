import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import ComposerRow from './components/composer-row'
import ListPage from '../../templates/list-page'

function Composers() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const query = useLocation().search
    const route = 'composers'
    
    useEffect(() => {
        // Fix later
        axios(`https://localhost:7000/api/${route}/${query.substring(3)}`)
        .then(res => {
            setData(res.data)
            setLoaded(true)
            return res
        })
        .catch(console.log)
    }, [query, route])
    
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