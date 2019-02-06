import React from 'react'
import PropTypes from 'prop-types'
import TypeLink from './TypeLink'
import {
  findPropertyData,
  getClassInheritance
} from '../schema'

class PropertyTable extends React.Component {
  static propTypes = {
    className: PropTypes.string.isRequired
  }

  render() {
    const { className } = this.props
    const classInheritance = getClassInheritance(className)

    return (
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Description</th>
          </tr>
        </thead>
        {classInheritance.reverse().map(classData => (
          <PropertyTableBody
            classData={classData}
            key={classData.id}
          />
        ))}
      </table>
    )
  }
}

class PropertyTableBody extends React.Component {
  static propTypes = {
    classData: PropTypes.string.isRequired
  }

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
            Properties of <TypeLink to={id} />
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
              <th>
                {
                  <TypeLink
                    to={url}
                  /> /* TODO: Use a link */
                }
              </th>
              <td>{rangeIncludes.join(' or ')}</td>
              <td>{comment}</td>
            </tr>
          )
        })}
      </tbody>
    )
  }
}

export default PropertyTable
