import { Link } from 'react-router-dom'
import SignupForm from '../Form/SignUpForm'

function Signup() {
  return (
    <div>
      <div>Signup</div>
      <SignupForm></SignupForm>

      <p>
        Already have an account? <Link to="/Signin">Signin</Link>
      </p>
    </div>
  )
}

export default Signup
