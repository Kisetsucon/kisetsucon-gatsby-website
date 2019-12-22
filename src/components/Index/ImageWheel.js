import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { gsap } from 'gsap'

import { makeStyles } from '@material-ui/core/styles'

const containerHeight = 200
const imageWidth = Math.floor((containerHeight * 16) / 9)

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    height: containerHeight,
    overflow: 'hidden'
  },
  boxes: {
    position: 'relative',
    left: -(imageWidth)
  },
  box: {
    width: imageWidth,
    height: containerHeight,
    position: 'absolute !important',
    borderLeft: '2px solid #fff'
  },
  image: {
    filter: 'brightness(60%)',
    transition: 'filter 0.25s',
    '&:hover': {
      filter: 'brightness(100%)'
    }
  }
}))

const root = React.createRef()

const ImageWheel = ({ children }) => {
  const classes = useStyles()
  const animationTimeline = gsap.timeline()
  const imageElements = []
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "wheel"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 200, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
            id
          }
        }
      }
    }
  `)
  const images = data.allFile.edges

  const setAnimation = (imageContainerSize, duration) => {
    animationTimeline.pause()

    animationTimeline.to(imageElements, {
      duration: duration,
      ease: 'none',
      repeat: -1,
      x: ('+=' + imageContainerSize),
      modifiers: {
        x: gsap.utils.unitize((x) => {
          return x % imageContainerSize
        })
      }
    })

    animationTimeline.play()
  }

  const initializeAnimation = (imageContainerSize, duration) => {
    animationTimeline.set(imageElements, {
      x: (i) => { return i * imageWidth }
    })

    animationTimeline.seek(Math.floor(Math.random() * duration))

    setAnimation(imageContainerSize, duration)
  }

  useEffect(() => {
    const imageContainerSize = imageElements.length * imageWidth
    const duration = (imageContainerSize / imageWidth) * 4
    let resizeTimeout = null

    initializeAnimation(imageContainerSize, duration)
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => setAnimation(imageContainerSize, duration), 100)
    })
  })

  return (
    <div ref={root} className={classes.root}>
      <div className={classes.boxes}>
        {images.map((element, index) => (
          <div key={element.node.id}
            ref={(ref) => { imageElements[index] = ref }}
            className={classes.box}>
            <Img
              className={classes.image}
              fluid={element.node.childImageSharp.fluid}
              draggable={false}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default ImageWheel
