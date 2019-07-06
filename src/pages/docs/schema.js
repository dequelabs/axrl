import React from 'react'
import { PrismJSON } from '../../components/Prism'
import simpleWebExample from '../../examples/simple-web.json'
import Layout from '../../components/layout'
import ClassHierarchy from '../../components/ClassHierarchy'

class SchemaPage extends React.Component {
  render() {
    return (
      <Layout title="Schema">
        <h1>AXRL Schema</h1>
        <ClassHierarchy />
      </Layout>
    )
  }
}

export default SchemaPage
