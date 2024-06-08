import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('theme')
      if (typeof storedPrefs === 'string') {
        return storedPrefs
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
      if (userMedia.matches) {
        return 'dark'
      }
    }
    return 'light'
  }

  const initialTheme = useMemo(getInitialTheme, [])

  const [theme, setTheme] = useState(initialTheme)

  const setThemeWithMiddleware = (newTheme) => {
    setTheme(newTheme)
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', newTheme)
    }
  }

  const toggleTheme = () => {
    setThemeWithMiddleware(theme === 'light' ? 'dark' : 'light')
  }

  const memoValue = useMemo(() => ({ theme, toggleTheme }), [theme])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={memoValue}>{children}</ThemeContext.Provider>
  )
}

const useTheme = () => {
  return useContext(ThemeContext)
}

export { ThemeProvider, useTheme }
