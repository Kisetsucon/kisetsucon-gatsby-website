import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { makeStyles } from '@material-ui/core/styles'

import { ExpandMore } from '@material-ui/icons'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  }
}))

const RegistrationPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title='Registration' />
      <Hero title='Registration' />

      <div className={classes.root}>
        <h2 className={classes.header}>Kisetsucon 2020 will be on Saturday, September 5th, 2020</h2>
        <ExpansionPanel expanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls='attendee-content'
            id='attendee-header'
          >
            Attendee
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls='artist-content'
            id='artist-header'
          >
            Artist [Applications Closed]
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls='vendor-content'
            id='vendor-header'
          >
            Vendor [Applications Closed]
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </Layout>
  )
}

export default RegistrationPage
