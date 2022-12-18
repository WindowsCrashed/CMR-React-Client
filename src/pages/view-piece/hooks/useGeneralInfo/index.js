import { Link } from "react-router-dom"

export default function useGeneralInfo() {
    const setGeneralInfo = (data) => [
        ["Name", data.name],
        ["Composer", <Link to={`/composers/${data.composer.id}`}>{data.composer.name} {data.composer.lastName}</Link>],
        ["Catalog", data.catalog],
        ["Tonality", data.tonality],
        ["Movements/Sections", data.movements],
        ["Year of Composition", data.year],
        ["Composer Time Period", data.composer.period],
        ["Instrumentation", data.instruments.map(instrument => instrument.name).join(', ')]
    ]

    return {
        setGeneralInfo
    }
}