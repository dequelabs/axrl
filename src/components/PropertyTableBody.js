import React from 'react'
import TypeLink from './TypeLink'
import { findPropertyData } from '../schema'

class PropertyTableBody extends React.Component {
  render() {
    const { classData } = this.props
    const { id, properties = [] } = classData
    if (properties.length === 0) {
      return null
    }

    return (
      <tbody>
        <tr>
          <th colSpan="3">
            Properties of <TypeLink type={id} />
          </th>
        </tr>

        {properties.map((propertyName, key) => {
          const {
            url = propertyName,
            rangeIncludes = ['TODO'],
            comment = 'TODO'
          } = findPropertyData(propertyName) || {}
          return (
            <tr key={key}>
              <th>{url /* TODO: Use a link */}</th>
              <td>{rangeIncludes.join(' or ')}</td>
              <td>{comment}</td>
            </tr>
          )
        })}
      </tbody>
    )
  }
}

export default PropertyTableBody
