import { Link } from 'react-router-dom'
import "./Login.css"
const Login = () => {
  return (
    <div className=".body">
    <div className="wrapper">
      <h2>WalletWatch</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your email" required/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter password" required/>
        </div>
    
        <div className="policy">
          <input type="checkbox"/>
          <h3>Remember me</h3>
        </div>
        <div className="input-box button">
          <input type="Submit" defaultValue="Login"/>
        </div>
        <div className="text">
          <h3>Don't have an account? <Link to="/Signup">Register now</Link></h3>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
