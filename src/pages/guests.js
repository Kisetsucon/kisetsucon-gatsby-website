import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row'
    }
  },
  buttons: {
    flex: '1 0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-start',
      flexBasis: 650,
      marginBottom: 0
    }
  },
  guestButton: {
    flex: '0 1 auto',
    margin: '0 10px 10px 0',
    minWidth: 'calc(85vw / 2)',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      flexBasis: 175,
      minWidth: 100,
      maxWidth: 175
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: 200,
      maxWidth: 200
    }
  },
  guestButtonActive: {
    animation: '$shadowPulse 1.5s ease infinite'
  },
  '@keyframes shadowPulse': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(0,0,0,0.5)'
    },
    '100%': {
      boxShadow: '0 0 0 8px rgba(0,0,0,0)'
    }
  },
  content: {
    padding: theme.spacing(2),
    backgroundColor: '#eee',
    width: '100%'
  }
}))

const GuestsPage = ({ data }) => {
  const classes = useStyles()
  const info = React.createRef()
  const [active, setActive] = React.useState('')

  const handleGuest = (key, node) => {
    setActive(key)

    const name = node.childMarkdownRemark.frontmatter.name
    const type = node.childMarkdownRemark.frontmatter.type
    const content = node.childMarkdownRemark.html

    let html = ''
    html += '<h2>' + name + '</h2>'
    html += '<h4>' + type + '</h4>'
    html += '<div>' + content + '</div>'

    info.current.innerHTML = html
  }

  return (
    <Layout>
      <SEO title='Guests' />
      <Hero title='Guests' />

      <div className={classes.root}>
        <div className={classes.buttons}>
          {data.allFile.edges.map(({ node }, index) => {
            const key = 'guest-' + index
            const classList = classes.guestButton + ' ' + (active === key ? classes.guestButtonActive : '')

            return (
              <div
                key={key}
                role='button'
                tabIndex='0'
                onClick={() => handleGuest(key, node)}
                onKeyPress={() => handleGuest(key, node)}
                className={classList}
              >
                <Img fluid={data.file.childImageSharp.fluid} draggable={false} />
              </div>
            )
          })}
        </div>
        <div ref={info} type='text' className={classes.content} />
      </div>
    </Layout>
  )
}

export default GuestsPage

export const query = graphql` 
  query GuestsQuery {
    allFile(filter: {sourceInstanceName: {eq: "guests"}}, sort: {fields: childMarkdownRemark___frontmatter___name, order: ASC}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              type
              facebook
              instagram
              twitter
            }
            html
          }
        }
      }
    }
    file(relativePath: { eq: "300.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
