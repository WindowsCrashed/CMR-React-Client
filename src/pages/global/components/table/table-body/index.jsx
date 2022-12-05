import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function TableBody({ row: Row, route }) {
    const [data, setData] = useState([])
    const query = useLocation().search

    useEffect(() => {
        // Fix later
        axios(`https://localhost:7000/api/${route}/${query.substring(3)}`)
        .then(res => {
            return setData(res.data)
        })
        .catch(console.log)
    }, [query, route])
    
    return (
        <tbody>
            {data.map((item, index) => <Row key={index} values={item}/>)}
        </tbody>
    )
}

export default TableBody