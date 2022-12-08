import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import InfoTable from '../../../global/components/info-table'
import AudioRecording from '../audio-recording'
import VideoRecording from '../video-recording'
import InfoPage from '../../../../templates/info-page'
import Section from '../../../../templates/section'
import SubSection from '../../../../templates/subsection'
import '../style.css'

function ViewPiece() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const query = useParams()

    useEffect(() => {
        // Fix later
        axios(`https://localhost:7000/api/pieces/${query.id}`)
        .then(res => {
            setData(res.data)
            setLoaded(true)
            return res
        }).catch(console.log)    
    }, [query])

    const setGeneralInfo = (data) => {
        return [
                    ["Name", data.name],
                    ["Composer", <Link to={`/composers/${data.composer.id}`}>{data.composer.name} {data.composer.lastName}</Link>],
                    ["Catalog", data.catalog],
                    ["Tonality", data.tonality],
                    ["Movements/Sections", data.movements],
                    ["Year of Composition", data.year],
                    ["Composer Time Period", data.composer.period],
                    ["Instrumentation", data.instruments.map(instrument => instrument.name).join(', ')]
                ]
    }

    return (
        loaded && 

        <InfoPage title={`${data.name} in ${data.tonality}, ${data.catalog}`}>
            <Section title='General Information'>
                <InfoTable data={setGeneralInfo(data)}/>
            </Section>
            <Section title='Performances'>
                <SubSection title='Audio Recordings'>
                    {data.audioRecordings.map((rec, index) => 
                        <AudioRecording key={index} {...rec}/>
                    )}
                </SubSection>
                <SubSection title='Video Recordings'>
                    {data.videoRecordings.map((rec, index) => 
                        <VideoRecording key={index} {...rec}/>
                    )}
                </SubSection>
            </Section>
            <Section title='Sheet Music'>
                {/* FIX LATER */}
                <div className="sheetmusic-container">
                    <a href={data.sheetMusic[0].url}
                        className="button btn-primary" target="blank">Click here to download</a>
                </div>
            </Section> 
        </InfoPage>
    )
}

export default ViewPiece