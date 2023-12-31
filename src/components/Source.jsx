/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'
import NewWindowIcon from '../assets/icon-new-window.svg'

export default function Sources({ sources }) {
  return (
    <div className="sources-container">
      <h3 className="source-title">
        {sources?.length > 1 ? 'Sources' : 'Source'}
      </h3>
      {sources?.map((source) => (
        <p className="source" key={uuidv4()}>
          <a href={source} target="_blank" rel="noreferrer">
            <span className="text">{source}</span>
            <img src={NewWindowIcon} alt="New Window" />
          </a>
        </p>
      ))}
    </div>
  )
}
