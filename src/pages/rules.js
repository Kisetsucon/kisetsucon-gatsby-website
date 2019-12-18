import React from 'react'
import { Link, graphql } from 'gatsby'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Accordion from '../components/Accordion'
import Hero from '../components/Hero'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  buttonGroup: {
    marginTop: '1rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around'
  },
  acceptDiv: {
    fontSize: '1.25rem',
    textAlign: 'center',
    marginTop: '1rem'
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
      <Hero title='Convention Rules & Guidelines' />

      <div className={classes.root}>
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

        <div className={classes.buttonGroup}>
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

        <div className={classes.acceptDiv}>
          By attending Kisetsucon, you accept to have read, understood, and will abide by these rules.
        </div>
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
