import React from 'react'
import InfoTable from '../../../../templates/info-table'

function VideoRecording({url, performers, channel}) {
    return (
        <div className="rec-vid-container">
            <div>
                <iframe title="Video Recording" src={`https://www.youtube.com/embed/${url}`} frameBorder="0"></iframe>
            </div>
            <InfoTable data={[
                ["Performers", performers],
                ["Channel", channel]
            ]}/>
        </div>
    )
}

export default VideoRecording