import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function Meta({ description, lang, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${
              data.site.siteMetadata.title
            }`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              }
            ]}
          />
        )
      }}
    />
  )
}

Meta.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

Meta.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Meta

const detailsQuery = graphql`
  query DefaultMetaOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
