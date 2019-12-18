import React from 'react'
import { graphql } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))

const PrivacyPolicy = ({ data }) => {
  const classes = useStyles()
  const content = data.markdownRemark.html

  return (
    <Layout>
      <SEO title='Privacy Policy' />
      <Hero title='Privacy Policy' thin />

      <div
        className={classes.root}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  )
}

export default PrivacyPolicy

export const query = graphql` 
  query PrivacyPolicyQuery {
    markdownRemark(frontmatter: {title: {eq: "Privacy Policy"}}) {
      frontmatter {
        title
      }
      html
    }
  }
`
