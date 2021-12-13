import React from "react"
import "./Footer.css"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-main-links-wrapper">
          <div className="footer-main-links">
            <h4>Solutions</h4>
            <Link to="/">E-Commerce</Link>
            <Link to="/">SAAS</Link>
            <Link to="/">Food &#38; Drink</Link>
            <Link to="/">Health &#38; Beauty</Link>
          </div>
          <div className="footer-main-links">
            <h4>Resources</h4>
            <Link to="/">FAQs</Link>
            <Link to="/">Documentation</Link>
            <Link to="/">Schedule A Demo</Link>
          </div>
          <div className="footer-main-links">
            <h4>Company</h4>
            <Link to="/">About</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Social Media</Link>
          </div>
        </div>
        <div className="email-list">
          <h5>Enter your email and receive news updates from our team</h5>
          <div className="email-input">
            <input type="email" />
            <h6 className="email-input-button button-green_pos">Join</h6>
          </div>
        </div>
      </div>
      © {new Date().getFullYear()}, All Rights Reserved. Rebillia, LLC |
      Designed and Developed by Rebillia Team
    </div>
  )
}

export default Footer
