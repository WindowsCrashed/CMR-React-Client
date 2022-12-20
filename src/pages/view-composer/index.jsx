import React from 'react'
import { useParams } from 'react-router-dom'
import InfoTable from '../../templates/info-table'
import History from './components/history'
import Works from './components/works'
import InfoPage from '../../templates/info-page'
import Section from '../../templates/section'
import useApi from '../../hooks/useApi'
import './style.css'
import useGeneralInfo from './hooks/useGeneralInfo'

function ViewComposer() {
    const { data, loaded } = useApi('composers', useParams().id)
    const { setGeneralInfo } = useGeneralInfo()

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