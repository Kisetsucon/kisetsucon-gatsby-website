import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Button from '@material-ui/core/Button'

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title='Home' />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to='/page-2/'>Go to page 2</Link>

      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </Layout>
  )
}

export default IndexPage
