import React, { useState, useEffect } from 'react'
import './style.css'
import TableHead from './table-head'
import TableBody from './table-body'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function Table({ row: Row, headers, route }) {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const query = useLocation().search

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

        <table className='table'>
            <TableHead values={headers}/>
            <TableBody row={Row} data={data}/>
        </table>
    )
}

export default Table