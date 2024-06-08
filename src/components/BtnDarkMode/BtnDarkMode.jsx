import './BtnDarkMode.css'
import { useTheme } from '../../context/ThemeContext'

function BtnDarkMode() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="dark-light" onClick={toggleTheme}>
      {theme === 'light' ? (
        <img src="/night.png" alt="Switch to dark mode" />
      ) : (
        <img src="/day.png" alt="Switch to light mode" />
      )}
    </div>
  )
}

export default BtnDarkMode
