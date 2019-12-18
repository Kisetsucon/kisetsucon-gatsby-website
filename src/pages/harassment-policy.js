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

const HarassmentPolicy = ({ data }) => {
  const classes = useStyles()
  const content = data.markdownRemark.html

  return (
    <Layout>
      <SEO title='Harassment Policy' />
      <Hero title='Harassment Policy' thin />

      <div
        className={classes.root}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  )
}

export default HarassmentPolicy

export const query = graphql` 
  query HarassmentPolicyQuery {
    markdownRemark(frontmatter: {title: {eq: "Harassment Policy"}}) {
      frontmatter {
        title
      }
      html
    }
  }
`
