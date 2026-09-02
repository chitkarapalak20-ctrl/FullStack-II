import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4>Student Portal</h4>
        <p>Empowering students through technology.</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Student Portal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;