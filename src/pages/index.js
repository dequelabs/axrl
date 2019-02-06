import React from 'react'
import Layout from '../components/layout'
import { PrismJSON } from '../components/Prism'
import simpleWebExample from '../examples/simple-web.json'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout title="what is AXRL">
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
        <p>
          AXRL will include classes for the following
          platforms:
        </p>
        <ul>
          <li>Web / HTML</li>
          <li>Android</li>
          <li>iOS</li>
          <li>Windows</li>
        </ul>
        <h2>Example: A basic web page test</h2>
        <p>
          This example shows the test for example.com, where
          the test produced 2 results. One of the results is
          "failed", and the second is "passed".
        </p>
        <PrismJSON code={simpleWebExample} />
      </Layout>
    )
  }
}

export default IndexPage
