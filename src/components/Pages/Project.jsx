import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Project.module.css'
import Button from '../Button/Button'
import { useFavorites } from '../../context/FavoritesContext'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useAuth } from '../../hooks/useAuth'
import Modal from '../Modal/Modal'

function Project() {
  const location = useLocation()
  const { character } = location.state || {}
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { isAuth } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  useEffect(() => {
    if (character) {
      setIsLoading(false)
    }
  }, [character])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageLoaded(true)
  }

  const handleFavoriteClick = () => {
    if (!isAuth) {
      setModalMessage('The functionality is available only to authorized users')
      setIsModalOpen(true)
      return
    }

    if (isFavorite(character.id)) {
      removeFromFavorites(character.id)
    } else {
      addToFavorites(character)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalMessage('')
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!character) {
    return <div>No character information available</div>
  }

  return (
    <div className={styles['project-container']}>
      <h1 className={styles['project-name']}>{character.name}</h1>
      {!imageLoaded && <LoadingSpinner />}
      <img
        src={character.image}
        alt={character.name}
        className={styles['project-image']}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <div className={styles['project-details']}>
        <p>
          <span className={styles['project-detail-label']}>Status:</span>
          {character.status || 'Unknown'}
        </p>
        <p>
          <span className={styles['project-detail-label']}>Species:</span>
          {character.species || 'Unknown'}
        </p>
        <p>
          <span className={styles['project-detail-label']}>Gender:</span>
          {character.gender || 'Unknown'}
        </p>
      </div>
      <Button onClick={handleFavoriteClick}>
        {isFavorite(character.id) ? 'Remove' : 'Add to favorites'}
      </Button>
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  )
}

export default Project
