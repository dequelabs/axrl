import React from 'react'

class TypeLink extends React.Component {
  render() {
    const { type } = this.props
    const url = '/' + type
    const linkText = type
    return <a href={url}>{linkText}</a>
  }
}

export default TypeLink
