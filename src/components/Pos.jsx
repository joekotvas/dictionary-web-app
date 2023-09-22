/* eslint-disable react/prop-types */

import { v4 as uuidv4 } from 'uuid'

import Definition from './Definition'

export default function Pos({ sense }) {
  return (
    sense && (
      <div className="pos-container">
        <div className="pos-title-wrapper">
          <h2 className="pos-title">{sense.partOfSpeech}</h2>
        </div>

        {sense.definitions && (
          <>
            <h3>Meaning</h3>
            <ul className="meaning-container">
              {sense.definitions?.map((definition) => (
                <Definition key={uuidv4()} definition={definition} />
              ))}
            </ul>
          </>
        )}

        {sense.synonyms && (
          <div className="synonyms-container">
            <h3 className="synonyms-title">Synonyms</h3>

            <ul className="synonyms-list">
              {sense.synonyms?.map((synonym) => (
                <li key={uuidv4()} className="synonym">
                  {synonym}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  )
}
