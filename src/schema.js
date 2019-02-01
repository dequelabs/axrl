/* IMPORTANT: This file is used in NodeJS, so can't use ES6 modules */
const classes = require('./schema/classes.json')
const properties = require('./schema/properties.json')

function findClassData(id) {
  return classes['@graph'].find(
    classData => classData.id === id
  )
}

function findPropertyData(id) {
  return properties['@graph'].find(
    propertyData => propertyData.id === id
  )
}

function getClassInheritance(id) {
  const classData = findClassData(id)
  if (!classData) {
    return []
  }
  return getClassInheritance(classData.subClassOf).concat(
    classData
  )
}

function getSuperClasses(type) {
  return classes['@graph'].filter(
    ({ subClassOf }) => subClassOf === type
  )
}

function getClassDescriptions() {
  return classes['@graph']
}

function getClassHierarchy(parentClass) {
  const subclasses = getClassDescriptions().filter(
    ({ subClassOf }) => subClassOf === parentClass
  )

  return subclasses.map(classDefinition => {
    return {
      subclasses: getClassHierarchy(classDefinition.id),
      ...classDefinition
    }
  })
}

module.exports = {
  findClassData,
  findPropertyData,
  getClassInheritance,
  getSuperClasses,
  getClassDescriptions,
  getClassHierarchy
}
