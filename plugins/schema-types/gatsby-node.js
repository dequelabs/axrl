const path = require('path')
const data = require('../../src/data/classes.json')

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  // Create pages for each JSON entry.
  data['@graph'].forEach(classData => {
    createPage({
      path: classData.label,
      component: path.resolve(
        `src/components/TypeDescription.js`
      ),
      // Send additional data to page from JSON (or query inside template)
      context: classData
    })
  })
}
