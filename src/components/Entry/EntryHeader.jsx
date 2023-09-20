/* eslint-disable react/prop-types */

import './EntryHeader.css'

function EntryHeader({ entry }) {
  const word = entry.word

  let phoneticEntry =
    entry.phonetics.find(
      (phonetic) => phonetic.audio?.slice(-6) === 'us.mp3'
    ) || entry.phonetics.find((phonetic) => phonetic.audio)

  const phonetic =
    phoneticEntry?.text ||
    entry.phonetics.find((phonetic) => phonetic.text)?.text ||
    entry.phonetic

  const audio = phoneticEntry?.audio

  return (
    <section className="entry-header">
      <h1 className="entry-title">{word}</h1>
      <p className="entry-pronunciation">{phonetic}</p>

      {audio && (
        <>
          <button
            className="pronunciation-play-button"
            onClick={() => document.getElementById('audio').play()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 75 75"
            >
              <g fill="#A445ED" fillRule="evenodd">
                <circle
                  className="play-button-circle"
                  cx="37.5"
                  cy="37.5"
                  r="37.5"
                  opacity=".25"
                />
                <path className="play-button-triangle" d="M29 27v21l21-10.5z" />
              </g>
            </svg>
          </button>
          <audio id="audio" className="audio-embed">
            <source src={audio} type="audio/mpeg" />
          </audio>
        </>
      )}
    </section>
  )
}

export default EntryHeader
