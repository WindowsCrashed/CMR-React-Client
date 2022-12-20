import { useState, useEffect } from "react"
import axios from "axios"

export default function useApi(route, query) {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        
        axios(`https://localhost:7000/api/${route}/${query}`, { cancelToken: cancelToken.token })
        .then(res => {
            setData(res.data)
            setLoaded(true)
            return res
        })
        .catch(err => {
            if (axios.isCancel(err)) return
            console.log(err)
        })

        return () => {
            cancelToken.cancel()
        }
    }, [query, route])

    return {
        data,
        loaded
    }
}