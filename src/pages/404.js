import React from 'react'

import Layout from '../components/layout'
import Meta from '../components/Meta'

const NotFoundPage = () => (
  <Layout title="Page not found">
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
