import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import PieceRow from './components/piece-row'
import ListPage from '../../templates/list-page'

function Pieces() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const query = useLocation().search
    const route = 'pieces'
    
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

        <ListPage title='Find a piece in our repository'
            tableData={{
                headers: ['Composer', 'Name', 'Catalog', 'Key'],
                row: PieceRow,
                data: data
            }}/>
    )
}
 
export default Pieces
