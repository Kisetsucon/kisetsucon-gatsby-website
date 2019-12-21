import React from 'react'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  }
}))

const Partners = ({ children }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root} boxShadow={3}>
      <h2>Put images and links of our partners here.</h2>
    </Box>
  )
}

export default Partners
