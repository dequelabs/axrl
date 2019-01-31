import React from 'react'
import Layout from './layout'
import PropertyTableBody from './PropertyTableBody'
import {
  getClassInheritance,
  getSuperClasses
} from '../schema'
import TypeLink from './TypeLink'

class TypeDescription extends React.Component {
  render() {
    const classData = this.props.pageContext
    if (!classData) {
      throw new Error(`Unknown type ${this.props.title}`)
    }
    const { id, comment } = classData
    const classInheritance = getClassInheritance(id)
    const url = `https://axrl.org/${id}`

    return (
      <Layout title={id}>
        <h1>{id}</h1>
        <p>
          Canonical URL: <a href={url}>{url}</a>
        </p>
        <p>
          {classInheritance.map(({ id }, key) => (
            <span key={key}>
              {key === 0 ? '' : ' > '}
              <TypeLink type={id} />
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
          {classInheritance.reverse().map(classData => (
            <PropertyTableBody
              classData={classData}
              key={classData.id}
            />
          ))}
        </table>

        <h2>More specific types</h2>
        <ul>
          {getSuperClasses(id).map(({ id }, key) => (
            <li key={key}>
              <TypeLink type={id} />
            </li>
          ))}
        </ul>
        {this.props.children}
      </Layout>
    )
  }
}

export default TypeDescription
