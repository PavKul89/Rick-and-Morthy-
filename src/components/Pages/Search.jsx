import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import styles from './Search.module.css'
import Post from '../Post/Post'
import { useFavorites } from '../../context/FavoritesContext'
import Modal from '../Modal/Modal'
import { useAuth } from '../../hooks/useAuth'
//////сюда
function Search() {
  const location = useLocation()
  const { state } = location
  const query = state ? state.query : ''
  const [results, setResults] = useState([])
  const { isAuth } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        try {
          const response = await axios.get(
            `https://rickandmortyapi.com/api/character/?name=${query}`
          )
          const data = response.data
          setResults(data.results || [])
        } catch (error) {
          console.error('Error when searching for characters:', error)
          setResults([])
        }
      }
    }

    fetchResults()
  }, [query])

  const openModal = (message) => {
    setModalMessage(message)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalMessage('')
  }

  const handleFavoriteClick = (character) => {
    if (!isAuth) {
      openModal('The functionality is available only to authorized users')
      return
    }

    if (isFavorite(character.id)) {
      removeFromFavorites(character.id)
    } else {
      addToFavorites(character)
    }
  }

  return (
    <div className={styles.search}>
      {results.length > 0 ? (
        results.map((character) => (
          <Post
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            character={character}
            handleFavoriteClick={handleFavoriteClick}
            openModal={openModal}
          />
        ))
      ) : (
        <div>No results found</div>
      )}
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  )
}

export default Search
