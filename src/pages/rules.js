import React from 'react'
import { Link, graphql } from 'gatsby'

import Button from '@material-ui/core/Button'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Accordion from '../components/Accordion'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))

const linkStyle = {
  textDecoration: 'none'
}

const RulesPage = ({ data }) => {
  const [expanded, setExpanded] = React.useState('')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const classes = useStyles()

  return (
    <Layout>
      <SEO title='Rules' />
      <div className={classes.root}>
        <h2>Convention Rules & Guidelines</h2>

        <div>
          {data.allFile.edges.map(({ node }, index) => {
            const title = node.childMarkdownRemark.frontmatter.title
            const content = node.childMarkdownRemark.html

            return (
              <Accordion key={'rules-' + index} title={title} func={handleChange} name={'rules-' + index} expanded={expanded}>
                {content}
              </Accordion>
            )
          })}
        </div>

        <div>
          <Link to='/privacy-policy/' style={linkStyle}>
            <Button variant='outlined' color='primary'>
              Privacy Policy
            </Button>
          </Link>

          <Link to='/harassment-policy/' style={linkStyle}>
            <Button variant='outlined' color='primary'>
              Harassment Policy
            </Button>
          </Link>
        </div>

        <div>By purchasing a Kisetsucon badge, you accept to have read, understood, and abide by these rules.</div>
      </div>
    </Layout>
  )
}

export default RulesPage

export const query = graphql` 
  query RulesQuery {
    allFile(filter: {sourceInstanceName: {eq: "rules"}}, sort: {fields: childMarkdownRemark___frontmatter___title, order: ASC}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  }
`
