import React from 'react'
import { Link } from 'gatsby'
import { findTypeData, getUrl } from '../schema'

class TypeLink extends React.Component {
  render() {
    const { to } = this.props
    const typeData = findTypeData(to)
    if (!typeData) {
      // Don't show a link if the type does not exist
      return <a>{to}</a>
    }
    const url = getUrl(to)
    const linkText = typeData.label || typeData.id
    if (url.substr(0, 4) === 'http') {
      return (
        <a href={url} target="_blank">
          {linkText}
        </a>
      )
    } else {
      return <Link to={url}>{linkText}</Link>
    }
  }
}

export default TypeLink
