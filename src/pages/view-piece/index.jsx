import React from 'react'
import { useParams } from 'react-router-dom'
import InfoTable from '../../templates/info-table'
import AudioRecording from './components/audio-recording'
import VideoRecording from './components/video-recording'
import InfoPage from '../../templates/info-page'
import Section from '../../templates/section'
import SubSection from '../../templates/subsection'
import useApi from '../../hooks/useApi'
import './style.css'
import useGeneralInfo from './hooks/useGeneralInfo'

function ViewPiece() {
    const { data, loaded } = useApi('pieces', useParams().id)
    const { setGeneralInfo } = useGeneralInfo()

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