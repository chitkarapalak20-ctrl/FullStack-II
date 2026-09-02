import React from 'react'
import {NavLink ,Link } from 'react-router'
function NavBar() {
  return (
      <nav>
          <h4>
              STUDENT MANAGEMENT SYSTEM
          </h4>
          <NavLink to="/"><b>Home</b> |</NavLink> 
          <Link to="/dashboard"><b> DashBoard</b> |</Link>
          <Link to="/login"> <b>Login</b></Link>
          
      </nav>
  )
}


export default NavBar