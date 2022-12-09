import React from 'react'
import InfoRow from './components/info-row'
import './style.css'

function InfoTable({data}) {   
    return (
        <div className="info-container">
            <table>
                <tbody>
                    {data.map((item, index) => <InfoRow key={index} label={item[0]} value={item[1]}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable