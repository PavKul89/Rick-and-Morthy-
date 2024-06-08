import { useState } from 'react'
import './Form.css'

function Form({ title, handleClickForm }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must contain at least 8 characters'
    }
    return ''
  }

  const handleSubmit = () => {
    const passwordError = validatePassword(pass)
    if (passwordError) {
      setError(passwordError)
    } else {
      setError('')
      handleClickForm(email, pass)
    }
  }

  return (
    <div className="form-register">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleSubmit}>{title}</button>
    </div>
  )
}

export default Form
