export default function useGeneralInfo() {
    const setGeneralInfo = (data) => [
        ["Name", data.name],
        ["Last Name", data.lastName],
        ["Nationality", data.nationality],
        ["Birth", data.birth],
        ["Death", data.death],
        ["Musical Period", data.period]
    ]

    return {
        setGeneralInfo
    }
}