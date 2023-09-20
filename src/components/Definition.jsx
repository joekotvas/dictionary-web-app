/* eslint-disable react/prop-types */
export default function Definition({
  definition: { definition, example, synonyms, antonyms },
}) {
  return (
    <li>
      <p className="definition">{definition}</p>
      {example && <p className="example">{example}</p>}
      {synonyms && <p>{synonyms}</p>}
      {antonyms && <p>{antonyms}</p>}
    </li>
  )
}
