import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  }
}))

const ImageWheel = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2>Bunch of images are going here</h2>
    </div>
  )
}

export default ImageWheel
