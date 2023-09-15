/* eslint-disable react/prop-types */
import './EntryHeader.css'

function EntryHeader({ entry }) {
    const word        = entry.word

    let phoneticEntry = entry.phonetics.find(phonetic => phonetic.audio?.slice(-6) === 'us.mp3') || 
                        entry.phonetics.find(phonetic => phonetic.audio)

    const phonetic    = phoneticEntry?.text || 
                        entry.phonetics.find(phonetic => phonetic.text)?.text || 
                        entry.phonetic

    const audio       = phoneticEntry?.audio

    return (
        <section className="entry-header">
            <h1 className="entry-title">
                {word}
            </h1>
            <p className="entry-pronunciation">{phonetic}</p>

            {audio && (
                <audio className="playback-button" controls>
                    <source src={audio} type="audio/mpeg" />
                </audio>
            )}
        </section>
    )
}

export default EntryHeader