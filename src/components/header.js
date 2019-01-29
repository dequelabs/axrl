import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#003349`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      className="layoutSize"
      style={{ padding: `1.45rem 1.0875rem` }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          fontSize: '1.3em',
          textDecoration: `none`
        }}
      >
        {siteTitle}
      </Link>
    </div>
    <nav
      className="mainNav"
      style={{
        background: '#0077c8'
      }}
    >
      <ul className="layoutSize">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs/audit">Using AXRL</Link>
        </li>
        <li>
          <Link to="/docs/base">Specification</Link>
        </li>
      </ul>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
