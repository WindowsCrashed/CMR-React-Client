import React from 'react'

function History({text}) {
    if (text === undefined) return

    return (
        <div className="hist-wrapper">
            {text.split('{?p?}').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    )
}

export default History