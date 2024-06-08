import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Form from './Form'
import { setUser } from '../../redux/slices/userSlice'

function Login() {
  const dispatch = useDispatch()
  const navigateLogin = useNavigate()

  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const userData = {
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }
        localStorage.setItem('user', JSON.stringify(userData))

        dispatch(setUser(userData))

        navigateLogin('/')
      })
      .catch(console.error)
  }

  return <Form title="Sign in" handleClickForm={handleLogin} />
}

export default Login
