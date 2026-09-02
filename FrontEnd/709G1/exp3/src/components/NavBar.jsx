import React from 'react'
import { NavLink, Link } from "react-router";

function NavBar() {
  return (
      <nav>
          <Link to="/">Home |</Link>
          <Link to="/dashboard">Dashboard |</Link>
          <Link to="/login">Login |</Link>
      
      </nav>
  )
}

export default NavBar