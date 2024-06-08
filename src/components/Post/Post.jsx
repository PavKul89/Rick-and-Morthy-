import React from 'react'
import { useNavigate } from 'react-router-dom'
import { withErrorBoundary } from 'react-error-boundary'
import PropTypes from 'prop-types'
import styles from './Post.module.css'
import Button from '../Button/Button'
import { useFavorites } from '../../context/FavoritesContext'
import { useAuth } from '../../hooks/useAuth'

const Post = ({ image, name, id, character, openModal }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  const navigate = useNavigate()
  const { isAuth } = useAuth()

  const handleMoreDetails = () => {
    navigate(`/project/${id}`, { state: { character } })
  }

  const handleFavoriteClick = () => {
    if (!isAuth) {
      openModal('The functionality is available only to authorized users')
      return
    }

    if (isFavorite(id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites({ id, image, name, character })
    }
  }

  return (
    <div className={styles.post}>
      <img src={image} alt={name} />
      <div className={styles['post-content']}>
        <div className={styles['post-btn']}>
          <Button onClick={handleMoreDetails}>More details</Button>
          <Button onClick={handleFavoriteClick}>
            {isFavorite(id) ? 'Remove' : 'Add to favorites'}
          </Button>
        </div>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

Post.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  character: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default withErrorBoundary(Post, {
  fallback: <div>Something went wrong</div>,
})
