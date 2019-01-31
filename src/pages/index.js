import React from 'react'
import Layout from '../components/layout'
import simpleExample from '../examples/simple.json'
import Prism from 'prismjs'

class IndexPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <Layout>
        <h1>What is AXRL</h1>
        <p>
          Accessibility Reporting Language (AXRL) is a data
          format designed to describe accessibility tests
          for Web pages, Native apps and other software.
          AXRL is designed to be a flexible and extendable
          data format. AXRL is designed as a JSON format,
          although because it is based on semantic web
          technologies, it could also be expressed in other
          formats.
        </p>
        <h2>Example: A basic web page test</h2>
        <p>
          This example shows the test for example.com, where
          the test produced 2 results. One of the results is
          "failed", and the second is "passed".
        </p>
        <pre>
          <code className="language-javascript">
            {JSON.stringify(simpleExample, null, 2)}
          </code>
        </pre>
      </Layout>
    )
  }
}

export default IndexPage
