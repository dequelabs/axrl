const path = require('path')
const { getClassDescriptions } = require('../../src/schema')

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  // Create pages for each JSON entry.
  getClassDescriptions().forEach(classData => {
    createPage({
      path: classData.id,
      component: path.resolve(
        `src/components/TypeDescription.js`
      ),
      // Send additional data to page from JSON (or query inside template)
      context: classData
    })
  })
}
