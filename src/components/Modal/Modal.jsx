import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css'
import Button from '../Button/Button'

const Modal = ({ message, onClose }) => (
  <div className={styles.modalOverlay}>
    <div className={styles.modal}>
      <p>{message}</p>
      <Button onClick={onClose}>Close</Button>
    </div>
  </div>
)

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
