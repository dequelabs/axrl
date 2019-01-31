import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div className="layoutSize">
      <Link to="/" className="brand">
        {siteTitle}
      </Link>
    </div>
    <nav className="mainNav">
      <ul className="layoutSize">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/examples">Examples</Link>
        </li>
        <li>
          <Link to="/docs/schema">Schema</Link>
        </li>
        <li>
          <a href="https://github.com/dequelabs/axrl/issues">
            Give feedback
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
