import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import InfoTable from '../../../global/components/info-table'
import AudioRecording from '../audio-recording'
import VideoRecording from '../video-recording'
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

        <div className="content content-piece">
            <header className="title-container border-bottom">
                <h1 className="title">{`${data.name} in ${data.tonality}, ${data.catalog}`}</h1>
            </header>
            <main>
                <section className="border-bottom">
                    <h2>General Information</h2>
                    <InfoTable data={setGeneralInfo(data)}/>
                </section>
                <section className="border-bottom">
                    <h2>Performances</h2>
                    <div className="border-bottom-thin">
                        {data.audioRecordings.map((rec, index) => 
                            <AudioRecording key={index} 
                                imageSrc={rec.imagePath}
                                audioSrc={rec.audioPath}
                                performers={rec.performers}
                                recordLabel={rec.recordLabel}/>
                        )}
                    </div>
                    <div>
                        {data.videoRecordings.map((rec, index) => 
                            <VideoRecording key={index} 
                                videoSrc={rec.url}
                                performers={rec.performers}
                                channel={rec.channel}/>
                        )}
                    </div>
                </section>
                <section>
                    {/* Fix Sheet Music Later */}
                    <h2>Sheet Music</h2>
                    <div className="sheetmusic-container">
                        <a href={data.sheetMusic[0].url}
                            className="button btn-primary" target="blank">Click here to download</a>
                    </div>
                </section>    
            </main>
        </div>
    )
}

export default ViewPiece