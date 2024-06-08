import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { debounce } from 'lodash'
import styles from './SearchBar.module.css'
import { useAuth } from '../../hooks/useAuth'

function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isFocused, setIsFocused] = useState(false)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { id: userId } = useAuth()

  useEffect(() => {
    if (location.state && location.state.query) {
      setQuery(location.state.query)
    }
  }, [location.state])

  const updateHistory = (searchQuery) => {
    if (userId) {
      const history =
        JSON.parse(localStorage.getItem(`searchHistory_${userId}`)) || []
      const updatedHistory = [...history, searchQuery].slice(-10)
      localStorage.setItem(
        `searchHistory_${userId}`,
        JSON.stringify(updatedHistory)
      )
    }
  }

  const fetchSuggestions = async (value) => {
    if (value.length > 0) {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${value}`
        )
        const data = response.data
        if (data.results) {
          setSuggestions(data.results)
        } else {
          setSuggestions([])
        }
      } catch (error) {
        console.error('Error receiving character suggestions:', error)
        setSuggestions([])
      }
    } else {
      setSuggestions([])
    }
  }

  const debouncedFetchSuggestions = useCallback(
    debounce(fetchSuggestions, 500),
    []
  )

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    debouncedFetchSuggestions(value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (query.length > 0) {
      updateHistory(query)
      navigate('/search', { state: { query } })
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setQuery('')
    setSuggestions([])
    navigate(`/project/${suggestion.id}`, { state: { character: suggestion } })
  }

  const handleFocus = async () => {
    setIsFocused(true)
    if (query.length > 0) {
      fetchSuggestions(query)
    }
  }

  const handleBlur = () => {
    if (!isMouseOver) {
      setSuggestions([])
    }
    setIsFocused(false)
  }

  const handleMouseEnter = () => {
    setIsMouseOver(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false)
    if (!isFocused) {
      setSuggestions([])
    }
  }

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchBar} onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="search..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      {(isFocused || isMouseOver) && suggestions.length > 0 && (
        <ul
          className={styles.suggestionsList}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
