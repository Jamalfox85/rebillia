import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="header">
    <Link to="/">
      <StaticImage src="../../Assets/logo-rebillia.png" alt="Rebillia Logo" />
    </Link>
    <div className="header-nav-links">
      <Link to="/product">Product</Link>
      <Link to="/solutions">Solutions</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/company">Company</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <button className="button-green_pos">Contact Us</button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
