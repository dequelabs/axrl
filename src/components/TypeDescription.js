import React from 'react'
import Layout from './layout'
import PropertyTableBody from './PropertyTableBody'
import {
  findClassData,
  getClassInheritance,
  getSuperClasses
} from '../data'
import TypeLink from './TypeLink'

class TypeDescription extends React.Component {
  render() {
    const classData = this.props.pageContext
    // const classData = findClassData(this.props.label)
    if (!classData) {
      throw new Error(`Unknown type ${this.props.title}`)
    }
    const { label, comment, url } = classData
    const classInheritance = getClassInheritance(label)

    return (
      <Layout>
        <h1>{label}</h1>
        <p>
          Canonical URL: <a href={url}>{url}</a>
        </p>
        <p>
          {classInheritance.map(({ label }, key) => (
            <span key={key}>
              {key === 0 ? '' : ' > '}
              <TypeLink type={label} />
            </span>
          ))}
        </p>

        <p>{comment}</p>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Expected Type</th>
              <th>Description</th>
            </tr>
          </thead>
          {classInheritance
            .reverse()
            .map((classData, key) => (
              <PropertyTableBody
                classData={classData}
                key={key}
              />
            ))}
        </table>

        <h2>More specific types</h2>
        <ul>
          {getSuperClasses(label).map(({ label }, key) => (
            <li>
              <TypeLink type={label} />
            </li>
          ))}
        </ul>
        {this.props.children}
      </Layout>
    )
  }
}

export default TypeDescription
