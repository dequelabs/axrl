import React from 'react'
import Layout from '../components/layout'
import simpleExample from '../examples/simple.json'
import webPageTestExample1 from '../examples/WebPageTest.json'
import HTMLPageExample from '../examples/HTMLPage.json'
import Prism from 'prismjs'

class IndexPage extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <Layout>
        <h1>AXRL Examples</h1>

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

        <h2>Example: Single test for a web page</h2>
        <p>
          The test of a web page with showcasing most of its
          properties
        </p>
        <pre>
          <code className="language-javascript">
            {JSON.stringify(webPageTestExample1, null, 2)}
          </code>
        </pre>

        <h2>Example: Multiple test for a web page</h2>
        <p>
          A single web page being tested multiple times.
          This can be used when using DOM Observer to track
          changes to the page. Scope is used to denote the
          element(s) that were changed and re-tested
        </p>
        <pre>
          <code className="language-javascript">
            {JSON.stringify(HTMLPageExample, null, 2)}
          </code>
        </pre>
      </Layout>
    )
  }
}

export default IndexPage
