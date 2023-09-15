/* eslint-disable react/prop-types */

import { v4 as uuidv4 } from 'uuid'

import Definition from './Definition'

export default function Pos({
    sense  
}) {

    return (sense && (
        <div className="pos-container">

            <h3>
                {sense.partOfSpeech}
            </h3>

            {sense.definitions && (
                <div className="meaning-container">

                    <h3>Meaning</h3>

                    {sense.definitions?.map(definition => 
                        <Definition key={uuidv4()} definition={definition} />
                    )}

                </div>
            )}

            {sense.synonyms && (
                <div className="synonyms-container">

                    <h3 className="synonyms-title">Synonyms</h3>
                    
                    <ul className="synonyms-list">
                        {sense.synonyms?.map(synonym =>
                            <li key={uuidv4()} className="synonym">{synonym}</li>
                        )}
                    </ul>

                </div>
            )}

        </div>
    ))
}