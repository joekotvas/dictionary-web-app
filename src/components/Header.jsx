/* eslint-disable react/prop-types */
import FontFaceSelect from './FontFaceSelect'
import ColorThemeToggle from './ColorThemeToggle'

import './Header.css'

import Logo from '../assets/logo.svg'

export default function Header({
  userSettings: { theme, fontFace },
  setUserSettings,
}) {
  return (
    <header className="site-header">
      <a className="header-logo-link" href="/">
        <img className="header-logo" src={Logo} alt="logo" />
      </a>
      <FontFaceSelect
        fontFace={fontFace}
        setFontFace={(fontFace) =>
          setUserSettings((prevSettings) => ({
            ...prevSettings,
            fontFace: fontFace,
          }))
        }
      />
      <ColorThemeToggle
        theme={theme}
        toggleTheme={() =>
          setUserSettings((prevSettings) => {
            return {
              ...prevSettings,
              theme: prevSettings.theme === 'light' ? 'dark' : 'light',
            }
          })
        }
      />
    </header>
  )
}
