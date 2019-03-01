const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(
    'src/components/pageTemplate.js'
  )

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    return Promise.reject(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(
    ({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {} // additional data can be passed via context
      })
    }
  )
}

// Replacing '/' would result in empty string which is invalid
const replacePath = path =>
  path === '/' ? path : path.replace(/\/$/, '')

// Remove the trailing space for each page
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise(resolve => {
    const oldPage = Object.assign({}, page)
    // Remove trailing slash unless page is /
    page.path = replacePath(page.path)
    if (page.path !== oldPage.path) {
      // Replace new page with old page
      deletePage(oldPage)
      createPage(page)
    }
    resolve()
  })
}
