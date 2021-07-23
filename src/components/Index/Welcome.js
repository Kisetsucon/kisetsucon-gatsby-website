import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundSize: 'cover',
    backgroundPosition: 'center 100px',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    color: '#eee',
    textAlign: 'center',
    zIndex: 2,
    padding: theme.spacing(6),
    textShadow: '0 2px 2px #0c3b3b',
    [theme.breakpoints.up('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%'
    },
    [theme.breakpoints.up('xl')]: {
      width: '50%'
    }
  }
}))

const Welcome = ({ children }) => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "DSC_8130.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 2560) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      tag='div'
      className={classes.root}
      fluid={data.image.childImageSharp.fluid}
    >
      <div className={classes.overlay} />
      <div className={classes.content}>
        <h2>Welcome to Kisetsucon 2022!</h2>
        <p style={{ marginTop: '1rem' }}>
          With a love for anime, cosplay, and gaming, a group of local event organizers and community members
          joined together to create a fun, friendly, multi-fandom event that can be enjoyed by anyone.
        </p>
        <p style={{ fontWeight: 'bold' }}>Thus, Kisetsucon was born.</p>
        <h3>Come join us in October!</h3>
      </div>
    </BackgroundImage>
  )
}

export default Welcome
