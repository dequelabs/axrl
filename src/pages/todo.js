import React from 'react'
import Layout from '../components/layout'
import {
  getClassDescriptions,
  findClassData,
  getPropertyDescriptions,
  findPropertyData
} from '../schema'

const UndefinedPropertiesPage = () => {
  return (
    <Layout title="Things to do">
      <h1>Things to do</h1>
      <h2>List of undefined classes</h2>
      <List items={getUndefinedClasses()} />

      <h2>List of undefined properties</h2>
      <List items={getUndefinedProperties()} />

      <h2>List of unused properties</h2>
      <List items={getUnusedProperties()} />
    </Layout>
  )
}

function List({ items }) {
  if (items.length === 0) {
    return (
      <p>
        <em>Nothing to do here. Go have a beer.</em>
      </p>
    )
  }
  return (
    <ul>
      {items.map((property, key) => (
        <li key={key}>{property}</li>
      ))}
    </ul>
  )
}

function getUnusedProperties() {
  const properties = getPropertyDescriptions()
  const classes = getClassDescriptions()
  return properties
    .filter(({ id: property }) => {
      return classes.every(
        ({ properties = [] }) =>
          !properties.includes(property)
      )
    })
    .map(({ id }) => id)
}

function getUndefinedClasses() {
  const list = getPropertyDescriptions()
  const propName = 'rangeIncludes'
  const lookup = findClassData
  return getUndefined(list, propName, lookup)
}

function getUndefinedProperties() {
  const list = getClassDescriptions()
  const propName = 'properties'
  const lookup = findPropertyData
  return getUndefined(list, propName, lookup)
}

function getUndefined(list, propName, lookup) {
  return list
    .reduce((out, item) => {
      const propValues = item[propName]
      if (!Array.isArray(propValues)) {
        return out
      }
      return out.concat(
        propValues.filter(propValue => !lookup(propValue))
      )
    }, [])
    .filter(unique)
}

function unique(item, index, arr) {
  return arr.indexOf(item) === index
}

export default UndefinedPropertiesPage
