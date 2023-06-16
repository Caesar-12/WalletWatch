import { Link } from 'react-router-dom'
import "./Signup.css"
const SignUp = () => {
  return (
    <div className=".body">
    <div className="wrapper">
      <h2>WalletWatch</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" required/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" required/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create password" required/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm password" required/>
        </div>
        <div className="policy">
          <input type="checkbox"/>
          <h3>I accept all terms & condition</h3>
        </div>
        <div className="input-box button">
          <input type="Submit" defaultValue="Register Now"/>
        </div>
        <div className="text">
          <h3>Already have an account? <Link to="/login">Login now</Link></h3>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUp
