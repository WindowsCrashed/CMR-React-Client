import React from 'react'
import InfoTable from '../../../../templates/info-table'

function AudioRecording({ imagePath, audioPath, performers, recordLabel }) {
    return (
        <div className="rec-aud-container">
            <div>
                <img src={`https://localhost:7000/api/files/imgs/${imagePath}`} alt="cover"/>
            </div>
            <div className="info-audio-wrapper">
                <InfoTable data={[
                    ["Performers", performers],
                    ["Record Label", recordLabel]
                ]}/>
                <div>
                    <audio controls controlsList="nodownload noplaybackrate"
                        src={`https://localhost:7000/api/files/audio/${audioPath}`}/>
                </div>
            </div>
        </div>
    )
}

export default AudioRecording