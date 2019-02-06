import React from 'react'
import Layout from './layout'
import { getClassInheritance } from '../schema'
import TypeLink from './TypeLink'
import ClassDescription from './ClassDescription'
import PropertyDescription from './PropertyDescription'

class TypeDescription extends React.Component {
  render() {
    const classData = this.props.pageContext
    if (!classData) {
      throw new Error(`Unknown type ${this.props.title}`)
    }
    const { label, id, comment, type } = classData
    const classInheritance = getClassInheritance(id)
    const url = `https://axrl.org/${id}`
    const typeDescription =
      type === 'Class' ? (
        <ClassDescription className={id} />
      ) : (
        <PropertyDescription propName={id} />
      )

    return (
      <Layout title={id}>
        <h1>{label || id}</h1>
        <p>
          Canonical URL: <a href={url}>{url}</a>
        </p>
        <p>
          {classInheritance.map(({ id }, key) => (
            <span key={key}>
              {key === 0 ? '' : ' > '}
              <TypeLink to={id} />
            </span>
          ))}
        </p>
        <p>{comment}</p>
        {typeDescription}
        {this.props.children}
      </Layout>
    )
  }
}

export default TypeDescription
