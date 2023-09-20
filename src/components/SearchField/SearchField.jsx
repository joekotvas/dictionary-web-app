import './SearchField.css'

function SearchField({
    word,
    setWord
}) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                id="primary-search-field"
                className="primary-search-field"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
        </form>
    )
}

export default SearchField