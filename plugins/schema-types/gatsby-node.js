const path = require('path')
const { getTypeDescriptions } = require('../../src/schema')

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  // Create pages for each JSON entry.
  getTypeDescriptions().forEach(typeData => {
    createPage({
      path: typeData.id,
      component: path.resolve(
        `src/components/TypeDescription.js`
      ),
      // Send additional data to page from JSON (or query inside template)
      context: typeData
    })
  })
}
