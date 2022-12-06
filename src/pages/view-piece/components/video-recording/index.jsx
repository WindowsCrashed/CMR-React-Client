import React from 'react'
import InfoTable from '../../../global/components/info-table'

function VideoRecording({videoSrc, performers, channel}) {
    return (
        <React.Fragment>
            <h3>Video Recording</h3>
            <div className="rec-vid-container">
                <iframe src={`https://www.youtube.com/embed/${videoSrc}`} frameBorder="0"></iframe>
                <InfoTable data={[
                    ["Performers", performers],
                    ["Channel", channel]
                ]}/>
            </div>
        </React.Fragment>
    )
}

export default VideoRecording