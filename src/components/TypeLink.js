import React from 'react'
import { Link } from 'gatsby'

class TypeLink extends React.Component {
  render() {
    const { type } = this.props
    const url = '/' + type
    const linkText = type
    return <Link to={url}>{linkText}</Link>
  }
}

export default TypeLink
