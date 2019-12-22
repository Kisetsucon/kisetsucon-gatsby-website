import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  partners: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    flexWrap: 'wrap'
  },
  link: {
    flex: '1 0 300px',
    maxWidth: 300,
    marginBottom: '2rem'
  },
  image: {
    width: '100%',
    height: '100%'
  }
}))

const Partners = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "partners"}}) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 80, maxWidth: 2560) {
                ...GatsbyImageSharpFluid_tracedSVG
                originalName
              }
            }
            id
          }
        }
      }
    }
  `)
  const images = data.allFile.edges

  return (
    <Box className={classes.root} boxShadow={3}>
      <h2>Partners</h2>
      <div className={classes.partners}>
        {images.map((element, index) => {
          const name = element.node.childImageSharp.fluid.originalName
          if (name.indexOf('troupe') !== -1) {
            element.node.link = 'https://www.rit.edu/sg/cosplay/'
          } else if (name.indexOf('tekko') !== -1) {
            element.node.link = 'https://tekko.us/'
          } else if (name.indexOf('aniparty') !== -1) {
            element.node.link = 'http://anisong.party/'
          }

          return (
            <a
              key={element.node.id}
              href={element.node.link}
              target='_blank'
              rel='noopener noreferrer'
              className={classes.link}
            >
              <Img
                className={classes.image}
                fluid={element.node.childImageSharp.fluid}
                draggable={false}
              />
            </a>
          )
        }
        )}
      </div>
    </Box>
  )
}

export default Partners
