import { useEffect, useRef, useState } from 'react'

import fetchEntry from './utils/fetchEntry'

import Header from './components/Header'
import SearchField from './components/SearchField/SearchField'
import Entry from './components/Entry/Entry'

import './App.css'

function App() {
  const userPreferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'

  // State
  const [term, setTerm] = useState('keyboard')
  const [entry, setEntry] = useState({})
  const [dataStatus, setDataStatus] = useState('loading')
  const [userSettings, setUserSettings] = useState({
    theme: userPreferredTheme,
    fontFace: 'sans-serif',
  })

  const { theme, fontFace } = userSettings

  // Timers
  const fetchTimeoutId = useRef(null)
  const retryIntervalId = useRef(null)

  // Fetch entry when term changes
  useEffect(() => {
    if (!term) {
      setDataStatus('no-term')
      return
    }

    clearInterval(retryIntervalId.current)

    fetchTimeoutId.current = setTimeout(() => {
      fetchEntry(term, setEntry, setDataStatus)
    }, 500)
    return () => {
      clearTimeout(fetchTimeoutId.current)
    }
  }, [term])

  // Set theme and font face on body element
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    document.body.setAttribute('data-font-face', fontFace)
  }, [theme, fontFace])

  // Retry fetching entry if connection error
  useEffect(() => {
    if (dataStatus === 'connection-error') {
      clearInterval(retryIntervalId.current)

      retryIntervalId.current = setInterval(() => {
        fetchEntry(term, setEntry, setDataStatus)
      }, 5000)
    }
    return () => {
      clearInterval(retryIntervalId.current)
    }
  }, [term, dataStatus])

  return (
    <div>
      <Header userSettings={userSettings} setUserSettings={setUserSettings} />

      <main>
        <SearchField word={term} setWord={setTerm} />
        {dataStatus === 'no-term' && (
          <p className="no-term-pane">Enter a word to search</p>
        )}
        {dataStatus === 'loading' && <p className="loading-pane">Loading...</p>}
        {dataStatus === 'word-not-found' && (
          <p className="not-found-pane">Word not found</p>
        )}
        {dataStatus === 'connection-error' && (
          <p className="connection-error-pane">Connection error. Retrying...</p>
        )}
        {dataStatus === 'data-loaded' && <Entry entry={entry} />}
      </main>
    </div>
  )
}

export default App
