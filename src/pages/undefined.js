import React from 'react'
import Layout from '../components/layout'
import {
  getClassDescriptions,
  findPropertyData
} from '../schema'

const UndefinedPropertiesPage = () => {
  return (
    <Layout>
      <h1>A list of undefined properties</h1>
      <ul>
        {getUndefinedProperties().map((property, key) => (
          <li key={key}>{property}</li>
        ))}
      </ul>
    </Layout>
  )
}

function getUndefinedProperties() {
  const classes = getClassDescriptions()
  return classes.reduce(
    (undefinedProperties, { properties }) => {
      if (!Array.isArray(properties)) {
        return undefinedProperties
      }
      return undefinedProperties.concat(
        properties.filter(
          property => !findPropertyData(property)
        )
      )
    },
    []
  )
}

export default UndefinedPropertiesPage
