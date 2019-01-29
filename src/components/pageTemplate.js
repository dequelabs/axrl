import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

export default function Template({ data = {} }) {
  const { markdownRemark = {} } = data // data.markdownRemark holds our post data
  const { frontmatter = {}, html = '' } = markdownRemark
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
