import { Link } from "react-router-dom"
// import { FiSettings } from "react-icons/fi"
import "./WelcomePage.css"

function WelcomePage() {
  return (
    <div className="welcome-container">
      
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <Link to="/signup" className="btn-create">
          Create Account
        </Link>

        <Link to="/login" className="btn-login">
          Already Registered? Login
        </Link>
      </div>
    </div>
  )
}

export default WelcomePage

