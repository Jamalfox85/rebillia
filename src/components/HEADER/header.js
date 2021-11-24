import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = () => (
  <header className="header">
    <h1>Rebillia</h1>
    <div className="header-nav-links">
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Solutions</Link>
    </div>
    <button>Contact Us</button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
