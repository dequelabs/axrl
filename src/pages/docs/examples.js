import React from 'react'
import { PrismJSON } from '../../components/Prism'
import Layout from '../../components/layout'
import simpleExample from '../../examples/simple.json'
import webPageTestExample1 from '../../examples/WebPageTest.json'
import HTMLPageExample from '../../examples/HTMLPage.json'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout title="AXRL Examples">
        <h1>AXRL Examples</h1>

        <h2>Example: A basic web page test</h2>
        <p>
          This example shows the test for example.com, where
          the test produced 2 results. One of the results is
          "failed", and the second is "passed".
        </p>
        <PrismJSON code={simpleExample} />

        <h2>Example: Single test for a web page</h2>
        <p>
          The test of a web page with showcasing most of its
          properties
        </p>
        <PrismJSON code={webPageTestExample1} />

        <h2>Example: Multiple test for a web page</h2>
        <p>
          A single web page being tested multiple times.
          This can be used when using DOM Observer to track
          changes to the page. Scope is used to denote the
          element(s) that were changed and re-tested
        </p>
        <PrismJSON code={HTMLPageExample} />
      </Layout>
    )
  }
}

export default IndexPage
