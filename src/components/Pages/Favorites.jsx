import React from 'react'
import { useFavorites } from '../../context/FavoritesContext'
import styles from './Favorites.module.css'
import Post from '../Post/Post'

const Favorites = () => {
  const { favorites } = useFavorites()

  return (
    <div>
      <h2>Favorites</h2>
      <div className={styles.favorites}>
        {favorites.map((favorite) => (
          <Post
            key={favorite.id}
            id={favorite.id}
            image={favorite.image}
            name={favorite.name}
            character={favorite} //character
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
