import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

const FavoritesContext = createContext()

export const useFavorites = () => useContext(FavoritesContext)

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const { id: userId } = useAuth()

  useEffect(() => {
    if (userId) {
      const savedFavorites =
        JSON.parse(localStorage.getItem(`favorites_${userId}`)) || []
      setFavorites(savedFavorites)
    } else {
      setFavorites([])
    }
  }, [userId])

  useEffect(() => {
    if (userId) {
      localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites))
    }
  }, [favorites, userId])

  const addToFavorites = (character) => {
    setFavorites((prevFavorites) => [...prevFavorites, character])
  }

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id)
    )
  }

  const isFavorite = (id) => favorites.some((item) => item.id === id)

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
