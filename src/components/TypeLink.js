import React from 'react'
import { Link } from 'gatsby'

class TypeLink extends React.Component {
  render() {
    const { to } = this.props
    const url = '/' + to
    const linkText = to
    return <Link to={url}>{linkText}</Link>
  }
}

export default TypeLink
