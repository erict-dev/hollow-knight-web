import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="nav">
      <div className="nav-link">
        <Link
          to="/team-cherry"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Team Cherry
        </Link>
      </div>
      <div className="nav-link">
        <Link
          to="/buy"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Buy
        </Link>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
