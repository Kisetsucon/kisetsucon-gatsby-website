import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1.5, 1.25, 1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2)
    }
  }
}))

const Partners = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      
    </div>
  )
}

export default Partners
