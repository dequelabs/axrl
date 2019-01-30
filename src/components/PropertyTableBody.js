import React from 'react'
import TypeLink from './TypeLink'
import { findPropertyData, findClassData } from '../data'

class PropertyTableBody extends React.Component {
  render() {
    const { key, classData } = this.props
    const { label, url, properties } = classData

    return (
      <tbody key={key}>
        <tr>
          <th colSpan="3">
            Properties of <TypeLink type={label} />
          </th>
        </tr>

        {properties.map((propertyName, key) => {
          const {
            url = propertyName,
            rangeIncludes = [],
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
