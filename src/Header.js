import React from 'react'

function Header() {
    return (
        <nav className="navbar navbar-dark bg-secondary">
    <div className="container-fluid ">
                <span className="navbar-brand mb-0 h1">
                    Wallet Watch Alx Project
                </span>
                
     <form method="post">
             <h1 className="mt-5">Login</h1>
     
           
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              required />
           
         

          
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required/>
          
          
       

        
          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "200px" }}
          >
            Login
          </button>
      
      </form>
    </div>
 </nav>
    )
}

export default Header