/* eslint-disable react/prop-types */
export default function Definition({
    definition: {
        definition,
        example,
        synonyms,
        antonyms
    }
}) {
    return (
        <>
            <p>{definition}</p>
            <p>{example}</p>
            <p>{synonyms}</p>
            <p>{antonyms}</p>
        </>
    )
}