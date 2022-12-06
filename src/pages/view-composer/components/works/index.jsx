import React from 'react'
import { Link } from 'react-router-dom'

function Works({works}) {
    return (
        <div className="works-container">
            <ul>
                {works.map((work, index) =>
                    <li key={index}>
                        <Link to={`/pieces/${work.id}`}>
                            {work.name} in {work.tonality}, {work.catalog}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Works