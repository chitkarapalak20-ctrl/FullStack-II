import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Student Portal</div>

      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/students">Student Details</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;