import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoTable from '../../../global/components/info-table'
import History from '../history'
import Works from '../works'
import '../style.css'

function ViewComposer() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const query = useParams()

    useEffect(() => {
        // Fix later
        axios(`https://localhost:7000/api/composers/${query.id}`)
        .then(res => {
            // console.log(query)
            setData(res.data)
            setLoaded(true)
            return res
        }).catch(console.log)
    }, [query])

    const setGeneralInfo = (data) => {
        return [
                    ["Name", data.name],
                    ["Last Name", data.lastName],
                    ["Nationality", data.nationality],
                    ["Birth", data.birth],
                    ["Death", data.death],
                    ["Musical Period", data.period]
                ]
    }

    return (
        loaded &&

        <div className="content content-composer">
            <header className="title-container border-bottom">
                <h1 className="title">{`${data.name} ${data.lastName}`}</h1>
            </header>
            <main>
                <section className="border-bottom">
                    <h2>General Information</h2>
                    <div className="info-img-container">
                        <InfoTable data={setGeneralInfo(data)}/>
                        <div className="comp-img-wrapper">
                            <img id="comp-img" src="server/assets/img/temp/Beethoven.jpg" alt="portrait"/>
                        </div>
                    </div>
                </section>
                <section className="border-bottom">
                    <h2>History</h2>
                    <History text={data.history}/>
                </section>
                <section>
                    <h2>List of Works</h2>
                    <Works works={data.pieces}/>
                </section>    
            </main>
        </div>
    )
}
 
export default ViewComposer