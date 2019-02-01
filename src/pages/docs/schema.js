import React from 'react'
import { PrismJSON } from '../../components/Prism'
import simpleExample from '../../examples/simple.json'
import Layout from '../../components/layout'
import ClassHierarchy from '../../components/ClassHierarchy'

class SchemaPage extends React.Component {
  render() {
    return (
      <Layout title="Schema">
        <h2>Introduction</h2>
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

        <h3>Example: A basic web page test</h3>
        <p>
          This example shows the test for example.com, where
          the test produced 2 results. One of the results is
          "failed", and the second is "passed".
        </p>
        <PrismJSON code={simpleExample} />

        <h2>
          <code>@context</code> property
        </h2>
        <p>
          Context is a required property that lives at the
          root object. The context provides a definition for
          all of the terms used in the data format. There
          are a number of contexts predefined for AXRL:
        </p>

        <p>TODO: Define / describe default contexts</p>

        <p>
          If the default contexts are insufficient, a custom
          context can also be provided. The{' '}
          <a href="https://json-ld.org/spec/latest/json-ld/">
            JSON-LD standard
          </a>{' '}
          defines how these can be created.
        </p>

        <h2>
          <code>@type</code> property
        </h2>
        <p>
          An object's <code>@type</code>property defines
          what that object is. By adding a type to all
          objects, that object is explicitly defined,
          instead of having to infer the type from its
          properties, or from the property it is on. Types
          can easilly be extended to add properties as they
          are needed. For example, <code>WebPageTest</code>
          and <code>AndroidViewTest</code> are both
          extensions on the
          <code>UserInterfaceTest</code> type. This gives
          them a number of shared properties, as some unique
          properties.
        </p>

        <p>TODO: Add a graphic</p>

        <ClassHierarchy />
      </Layout>
    )
  }
}

export default SchemaPage
