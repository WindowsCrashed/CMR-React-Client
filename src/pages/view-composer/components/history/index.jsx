import React from 'react'

function History({text}) {
    return (
        <div className="hist-wrapper">
            {text.split('{?p?}').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    )
}

export default History