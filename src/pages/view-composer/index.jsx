import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoTable from '../../templates/info-table'
import History from './components/history'
import Works from './components/works'
import InfoPage from '../../templates/info-page'
import Section from '../../templates/section'
import './style.css'

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

        <InfoPage title={`${data.name} ${data.lastName}`}>
            <Section title='General Information'>
                <div className="info-img-container">
                    <InfoTable data={setGeneralInfo(data)}/>
                    <div className="comp-img-wrapper">
                        <img src={`https://localhost:7000/api/files/imgs/${data.imgPath}`} alt="portrait"/>
                    </div>
                </div>
            </Section>
            <Section title='History'>
                <History text={data.history}/>
            </Section>
            <Section title='List of Works'>
                <Works works={data.pieces}/>
            </Section> 
        </InfoPage>
    )
}
 
export default ViewComposer