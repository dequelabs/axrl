import React from 'react'
import PropTypes from 'prop-types'
import TypeLink from './TypeLink'
import List from './List'
import PropertyTable from './PropertyTable'
import { getSuperClasses } from '../schema'

class ClassDescription extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { className } = this.props
    return (
      <>
        <PropertyTable className={className} />
        <List title="More Specific Types">
          {getSuperClasses(className).map(({ id }) => (
            <TypeLink to={id} />
          ))}
        </List>
      </>
    )
  }
}

export default ClassDescription
