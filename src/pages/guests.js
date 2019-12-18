import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))

const GuestsPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title='Guests' />
      <Hero title='Guests' />

      <div className={classes.root}>
        <h2>Coming Soon!</h2>
      </div>
    </Layout>
  )
}

export default GuestsPage
