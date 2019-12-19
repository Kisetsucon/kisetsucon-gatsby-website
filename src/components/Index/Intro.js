import React from 'react'
import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { ExpandMore } from '@material-ui/icons'

import Countdown from '../Countdown'
import Logo from '../Logo'

const useStyles = makeStyles(theme => ({
  intro: {
    width: '100%',
    height: 'calc(100vh - 51px)',
    background: 'pink',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '100vh'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  info: {
    flex: '1 1 auto',
    padding: theme.spacing(2),
    maxWidth: 600
  },
  mainButton: {
    background: 'linear-gradient(to right, #ff7945, #ff4545)',
    borderRadius: '20px'
  },
  goDownContainer: {
    height: 50,
    marginTop: '1rem',
    position: 'relative'
  },
  goDown: {
    animation: '$bounceDown 1.5s infinite',
    position: 'absolute',
    fontSize: '3rem',
    transform: 'translateX(-1.5rem)'
  },
  '@keyframes bounceDown': {
    '0%': {
      top: 0
    },
    '50%': {
      top: '1rem'
    },
    '100%': {
      top: 0
    }
  }
}))

const Intro = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.intro}>
      <Container className={classes.container} fixed>
        <div className={classes.info}>
          <Logo />
          <br />
          <div>
            <h3>September 5th, 2020</h3>
            <h4>RIT Inn & Conference Center</h4>
          </div>
          <br />
          <Countdown time='05 September 2020 10:00:00' />
          <br />
          <Link to='/registration' style={{ textDecoration: 'none' }}>
            <Button variant='contained' color='secondary' className={classes.mainButton}>
              Buy Tickets
            </Button>
          </Link>
          <br />
          <div className={classes.goDownContainer}>
            <ExpandMore className={classes.goDown} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Intro
