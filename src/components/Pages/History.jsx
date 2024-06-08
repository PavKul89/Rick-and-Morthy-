import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './History.module.css'
import Button from '../Button/Button'
import { useAuth } from '../../hooks/useAuth'

function History() {
  const [history, setHistory] = useState([])
  const navigate = useNavigate()
  const { id: userId } = useAuth()

  useEffect(() => {
    if (userId) {
      const storedHistory =
        JSON.parse(localStorage.getItem(`searchHistory_${userId}`)) || []
      setHistory(storedHistory)
    }
  }, [userId])

  const handleHistoryClick = (query) => {
    navigate('/search', { state: { query } })
  }

  const handleClearHistory = () => {
    if (userId) {
      localStorage.removeItem(`searchHistory_${userId}`)
      setHistory([])
    }
  }

  return (
    <div className={styles.historyContainer}>
      <h2>History</h2>
      {history.length > 0 ? (
        <>
          <ul className={styles.historyList}>
            {history.map((query, index) => (
              <li key={index}>
                <div
                  onClick={() => handleHistoryClick(query)}
                  className={styles.historyLink}
                >
                  {query}
                </div>
              </li>
            ))}
          </ul>
          <Button onClick={handleClearHistory} className={styles.clearButton}>
            Clear history
          </Button>
        </>
      ) : (
        <div>No search history</div>
      )}
    </div>
  )
}

export default History
