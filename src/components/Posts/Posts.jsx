import React, { lazy, Suspense, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useGetCharactersQuery } from '../../redux/searvices'
import styles from './Posts.module.css'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

const Post = lazy(() => import('../Post/Post'))
const LoadingSpinner = lazy(() =>
  import('../../components/LoadingSpinner/LoadingSpinner')
)

function Posts() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading } = useGetCharactersQuery(currentPage)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [isFirstPage, setIsFirstPage] = useState(true)
  const [isLastPage, setIsLastPage] = useState(true)
  const pagesToShow = 10 // Количество отображаемых страниц

  useEffect(() => {
    if (data) {
      setIsFirstPage(currentPage === 1)
      setIsLastPage(currentPage === data.info.pages)
    }
  }, [currentPage, data])

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    if (data && currentPage < data.info.pages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const openModal = (message) => {
    setModalMessage(message)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalMessage('')
  }

  if (isLoading)
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LoadingSpinner />
        </Suspense>
      </div>
    )

  if (error) return <div>Error: {error.message}</div>

  // Генерация массива кнопок для отображения страниц
  const pageButtons = []
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2))
  const endPage = Math.min(data.info.pages, startPage + pagesToShow - 1)
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <Button
        key={i}
        onClick={() => handlePageClick(i)}
        className={`${styles.pageButton} ${
          i === currentPage ? styles.activePage : ''
        }`}
      >
        {i}
      </Button>
    )
  }

  return (
    <div className={styles.postsContainer}>
      <div className={styles.posts}>
        <Suspense fallback={<div>Loading...</div>}>
          {data.results.map((item) => (
            <Post
              key={item.id}
              image={item.image}
              name={item.name}
              id={item.id}
              character={item}
              openModal={openModal}
            />
          ))}
        </Suspense>
      </div>
      <div className={styles.pagination}>
        <Button
          onClick={handlePreviousPage}
          disabled={isFirstPage}
          className={styles.pageButton}
        >
          Back
        </Button>
        <span className={styles.pageMarker}>Page {currentPage}</span>
        {pageButtons}
        <span className={styles.pageMarker}>of {data.info.pages}</span>
        <Button
          onClick={handleNextPage}
          disabled={isLastPage}
          className={styles.pageButton}
        >
          Next
        </Button>
      </div>
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  )
}

Posts.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  character: PropTypes.object.isRequired,
}

export default Posts
