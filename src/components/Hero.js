import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Leaves from './Leaves/Leaves'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    height: '250px',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #e3875d, #d5a323)',
    backgroundSize: '400% 400%',
    animation: '$gradientBG 15s ease infinite'
  },
  thin: {
    height: 150
  },
  '@keyframes gradientBG': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  },
  title: {
    fontSize: '10vw',
    textAlign: 'center',
    width: '100%',
    padding: theme.spacing(2),
    color: '#eee',
    textTransform: 'capitalize',
    textShadow: '0 2px 2px #0c3b3b',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.up('sm')]: {
      fontSize: '4.5vw'
    }
  }
}))

const Hero = ({ title, thin }) => {
  const classes = useStyles()
  const classList = classes.root + ' ' + ((thin) ? classes.thin : '')

  return (
    <div className={classList}>
      <Leaves />
      <span className={classes.title}>{title}</span>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  thin: PropTypes.bool
}

Hero.defaultProps = {
  title: '',
  thin: false
}

export default Hero
