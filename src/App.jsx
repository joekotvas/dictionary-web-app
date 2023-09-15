import { useEffect, useState } from 'react'

import fetchEntry from './utils/fetchEntry'

import Header from './components/Header'
import SearchField from './components/SearchField/SearchField'
import Entry from './components/Entry/Entry'

import './App.css'

function App() {

  const [term, setTerm] = useState('eat')
  const [entry, setEntry] = useState({})
  const [dataStatus, setDataStatus] = useState('loading')
  const [userSettings, setUserSettings] = useState({
    theme: 'light',
    fontFace: 'sans-serif'
  })

  const { theme, fontFace } = userSettings

  useEffect(() => {
    fetchEntry(term, setEntry, setDataStatus)
  }, [term])

  return (
    <div className={`${theme}-theme ${fontFace}-font`}>

      <Header userSettings={userSettings} setUserSettings={setUserSettings} />

      <main>
        <SearchField word={term} setWord={setTerm} />
        {dataStatus === 'loading'          && <p>Loading...</p>}
        {dataStatus === 'word-not-found'   && <p>Word not found</p>}
        {dataStatus === 'connection-error' && <p>Connection error</p>}
        {dataStatus === 'data-loaded'      && <Entry entry={entry} />}
      </main>

    </div>
  )
}

export default App