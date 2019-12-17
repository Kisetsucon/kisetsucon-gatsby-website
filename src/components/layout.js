import React from 'react'
import PropTypes from 'prop-types'

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import Navigation from './Navigation'
import './layout.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5, 1.25, 1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2)
    }
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation />
      <main className={classes.content}>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
