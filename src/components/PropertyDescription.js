import React from 'react'
import TypeLink from './TypeLink'
import List from './List'
import {
  getClassDescriptions,
  findPropertyData
} from '../schema'

class PropertyDescription extends React.Component {
  render() {
    const { propName } = this.props
    const classes = getClassDescriptions().filter(
      ({ properties = [] }) => {
        return properties.includes(propName)
      }
    )
    const { rangeIncludes = [] } = findPropertyData(
      propName
    )

    return (
      <>
        <List title="Expected Types">
          {rangeIncludes.map(className => (
            <TypeLink to={className} />
          ))}
        </List>
        <List title="Property of Class">
          {classes.map(({ id }, key) => (
            <TypeLink to={id} />
          ))}
        </List>
      </>
    )
  }
}

export default PropertyDescription
