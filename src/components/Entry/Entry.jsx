/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'

import EntryHeader from './EntryHeader'
import Pos from '../Pos'
import Source from '../Source'

import './Entry.css'

function Entry({ 
    entry
}) {
    let Definitions = <></>

    if (entry.meanings) {
        Definitions = entry.meanings.map(sense => <Pos key={uuidv4()} sense={sense} />)
    }

    console.log(entry)

    return entry && (
        <>
            <section className="entry-container">
                <EntryHeader entry={entry} />

                {Definitions}

                <Source sources={entry.sourceUrls} />
            </section>
        </>
    )
}

export default Entry