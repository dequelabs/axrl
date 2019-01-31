import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
    <p>Sorry, please go back and try some again.</p>
    <p>
      To report an issue, go to{' '}
      <a href="https://github.com/dequelabs/axrl/issues">
        Github issues
      </a>
      .
    </p>
  </Layout>
)

export default NotFoundPage
