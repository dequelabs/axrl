import properties from '../data/properties.json'
import classes from '../data/classes.json'

export function findClassData(label) {
  return classes['@graph'].find(
    classData => classData.label === label
  )
}

export function findPropertyData(label) {
  return properties['@graph'].find(
    propertyData => propertyData.label === label
  )
}

export function getClassInheritance(label) {
  const classData = findClassData(label)
  if (!classData) {
    return []
  }
  return getClassInheritance(classData.subClassOf).concat(
    classData
  )
}

export function getSuperClasses(label) {
  return classes['@graph'].filter(
    ({ subClassOf }) => subClassOf === label
  )
}
