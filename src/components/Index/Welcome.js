import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  content: {
    textAlign: 'center',
    padding: theme.spacing(6),
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

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h2>Welcome to Kisetsucon 2020!</h2>
        <p style={{ marginTop: '1rem' }}>
          With a love for anime, cosplay, and gaming, a group of local event organizers and community members
          joined together to create a fun, friendly, multi-fandom event that can be enjoyed by anyone.
        </p>
        <p style={{ fontWeight: 'bold' }}>Thus, Kisetsucon was born.</p>
        <h3>Come join us in September!</h3>
      </div>
    </div>
  )
}

export default Welcome
