import React from 'react'

class List extends React.Component {
  render() {
    const { children, title } = this.props
    if (children.length === 0) {
      return null
    }

    return (
      <>
        {typeof title === 'string' ? (
          <h2>{title}</h2>
        ) : (
          title
        )}
        <ul>
          {children.map((child, key) => (
            <li key={key}>{child}</li>
          ))}
        </ul>
      </>
    )
  }
}

export default List
