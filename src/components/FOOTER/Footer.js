import React from "react"
import "./Footer.css"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-main-links">
          <h4>Solutions</h4>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
        </div>
        <div className="footer-main-links">
          <h4>Resources</h4>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
        </div>
        <div className="footer-main-links">
          <h4>Company</h4>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
        </div>
        <div className="email-list">
          <h5>Enter your email and receive news updates from our team</h5>
          <div className="email-input">
            <label>
              <input type="email" />
              Join
            </label>
          </div>
        </div>
      </div>
      © {new Date().getFullYear()}, All Rights Reserved. Rebillia, LLC |
      Designed and Developed by Rebillia Team
    </div>
  )
}

export default Footer
