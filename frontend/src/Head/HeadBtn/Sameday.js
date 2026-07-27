import React from 'react'
import { Link } from 'react-router-dom'

const Sameday = () => {
  return (
    <nav className="navbar">
    <div className="liheadbtn">
    
     <Link to="/help">
              <div className="twicearoow">
                <span>Sameday</span>
                
              </div>
            </Link>
    </div>
  </nav>
  )
}

export default Sameday