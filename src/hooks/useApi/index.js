import { useState, useEffect } from "react"
import axios from "axios"

export default function useApi(route, query) {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        // Fix later
        axios(`https://localhost:7000/api/${route}/${query}`)
        .then(res => {
            setData(res.data)
            setLoaded(true)
            return res
        })
        .catch(console.log)
    }, [query, route])

    return {
        data,
        loaded
    }
}