import React from 'react'
import { getClassHierarchy } from '../schema'
import TypeLink from './TypeLink'

function classStructure(classDefinition, key) {
  let subClasses = null
  if (classDefinition.subclasses.length > 0) {
    subClasses = (
      <ul>
        {classDefinition.subclasses.map(classStructure)}
      </ul>
    )
  }

  return (
    <li key={key}>
      <strong>
        <TypeLink to={classDefinition.id} />:
      </strong>{' '}
      {classDefinition.comment} <br />
      {subClasses}
    </li>
  )
}

class ClassHierarchy extends React.Component {
  render() {
    return (
      <>
        <h2>Class Hierarchy</h2>
        <ul>{getClassHierarchy().map(classStructure)}</ul>
      </>
    )
  }
}

export default ClassHierarchy
