/* eslint-disable react/prop-types */

export default function ColorThemeToggle({
    theme = 'light',
    toggleTheme = () => {},
}) {
    return (
        <div>
        <button className="color-theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
        </div>
    )
}