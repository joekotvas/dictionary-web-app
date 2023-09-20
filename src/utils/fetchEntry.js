export default async function fetchEntry(word, setEntry, setDataStatus) {
  setDataStatus('loading')
  const endpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  try {
    const response = await fetch(endpoint + encodeURIComponent(word))
    const data = await response.json()
    if (data.title) {
      setEntry({})
      setDataStatus('word-not-found')
    } else {
      setEntry(data[0])
      setDataStatus('data-loaded')
    }
  } catch (error) {
    console.error('Error:', error)
    setEntry({})
    setDataStatus('connection-error')
  }
}
