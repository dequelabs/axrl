import React from 'react'
import { PrismJSON } from '../../components/Prism'
import Layout from '../../components/layout'
import simpleWebExample from '../../examples/simple-web.json'
import simpleIOSExample from '../../examples/simple-ios.json'
import simpleAndroidExample from '../../examples/simple-android.json'
import webPageTestExample1 from '../../examples/WebPageTest.json'
import HTMLPageExample from '../../examples/HTMLPage.json'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout title="Examples">
        <h1>AXRL Examples</h1>
        <ul>
          <li>
            <a href="#simpleWebExample">
              Simple web page test
            </a>
          </li>
          <li>
            <a href="#webPageTestExample1">
              Complete test for a web page
            </a>
          </li>
          <li>
            <a href="#HTMLPageExample">
              Multiple test for a web page
            </a>
          </li>
          <li>
            <a href="#simpleIOSExample">
              Simple iOS UIViewController test
            </a>
          </li>
          <li>
            <a href="#simpleAndroidExample">
              Simple Android Layout test
            </a>
          </li>
        </ul>

        <h2 id="simpleWebExample">Simple web page test</h2>
        <p>
          This example shows the test for example.com, where
          the test produced 2 results. One of the results is
          "failed", and the second is "passed".
        </p>
        <PrismJSON code={simpleWebExample} />

        <h2 id="webPageTestExample1">
          Complete test for a web page
        </h2>
        <p>
          The test of a web page with showcasing most of its
          properties
        </p>
        <PrismJSON code={webPageTestExample1} />

        <h2 id="HTMLPageExample">
          Multiple test for a web page
        </h2>
        <p>
          A single web page being tested multiple times.
          This can be used when using DOM Observer to track
          changes to the page. Scope is used to denote the
          element(s) that were changed and re-tested
        </p>
        <PrismJSON code={HTMLPageExample} />

        <h2 id="simpleIOSExample">
          Simple iOS UIViewController test
        </h2>
        <p>
          An example similar to the simple web example,
          written for iOS.
        </p>
        <PrismJSON code={simpleIOSExample} />

        <h2 id="simpleAndroidExample">
          Simple Android Layout test
        </h2>
        <p>
          An example similar to the simple web example,
          written for iOS.
        </p>
        <PrismJSON code={simpleAndroidExample} />
      </Layout>
    )
  }
}

export default IndexPage
