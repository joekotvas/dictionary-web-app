/* eslint-disable react/prop-types */
import { useState } from 'react'
import Toggle from 'react-switch'

export default function ColorThemeToggle({
  theme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light',
  toggleTheme = () => {},
}) {
  const [isHovered, setIsHovered] = useState(false)

  const toggleHover = (force) => {
    setIsHovered((prevState) => (force !== undefined ? force : !prevState))
  }

  return (
    <div className="color-theme-toggle-container">
      <div
        className="color-theme-toggle-switch-container"
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <Toggle
          className="color-theme-toggle"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          onColor="#A445ED"
          offColor={isHovered ? '#A445ED' : '#757575'}
          onHandleColor="#fff"
          offHandleColor="#fff"
          activeBoxShadow="0 0 1px 2px #ffffff"
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={14}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleTheme()
            }
          }}
        />
      </div>
      <svg
        className="moon-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  )
}
