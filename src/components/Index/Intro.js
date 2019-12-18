import React from 'react'
import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  intro: {
    width: '100%',
    height: 600,
    background: 'pink',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  mainButton: {
    background: 'linear-gradient(to right, #ff7945, #ff4545)',
    borderRadius: '20px'
  },
}))

const Intro = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.intro}>
      <Container fixed>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={8} lg={6}>
            <h1>Kisetsucon 2020</h1>
            <h3>September 5th, 2020</h3>
            <h4>RIT Inn & Conference Center</h4>
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <div>Countdown</div>
          </Grid>
          <Grid item xs={12}>
            <Link to='/registration' style={{ textDecoration: 'none' }}>
              <Button variant='contained' color='secondary' className={classes.mainButton}>
                Buy Tickets
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Intro
