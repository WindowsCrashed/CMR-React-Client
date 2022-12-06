import React from 'react'
import InfoTable from '../../../global/components/info-table'

function AudioRecording({ imageSrc, audioSrc, performers, recordLabel }) {
    return (
        <React.Fragment>
            <h3>Audio Recording</h3>
            <div className="rec-aud-container">
                <div>
                    <img src={`https://localhost:7000/api/files/imgs/${imageSrc}`} alt="cover"/>
                </div>
                <div className="info-audio-wrapper">
                    <InfoTable data={[
                        ["Performers", performers],
                        ["Record Label", recordLabel]
                    ]}/>
                    <audio controls controlsList="nodownload noplaybackrate"
                        src={`https://localhost:7000/api/files/audio/${audioSrc}`}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AudioRecording