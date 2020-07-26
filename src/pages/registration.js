import React from 'react'
import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'
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
  },
  registrationButton: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  }
}))

const RegistrationPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title='Registration' />
      <Hero title='Registration' />

      <div className={classes.root}>
        <h2 className={classes.header}>Kisetsucon 2021 will be on Saturday, October 2nd, 2021</h2>
        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls='attendee-content'
            id='attendee-header'
          >
            Attendee
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <p>
                <strong>Pre-Registration:</strong> $20<br />
                <strong>Full Price Registration:</strong> $25
              </p>

              <p>All minors under the age of 6 are admitted to Kisetsucon for free as long as they
              are accompanied by a Guardian at all times. The Guardian must purchase a badge as well.</p>

              <p>By purchasing a badge, you agree to follow all <Link to='/rules'>Kisetsucon rules and policies</Link>.</p>
            </div>
            <div className={classes.registrationButton}>
              <Button
                variant='contained'
                color='primary'
                target='_blank'
                rel='noopener noreferrer'
                href='https://ti.to/kisetsucon/kisetsucon-2020'>
                  Register Now
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls='artist-content'
            id='artist-header'
          >
            Artist
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <h3>General Guidelines</h3>
              <ul>
                <li>The seller submitting the application will be considered the main point of contact and will be responsible for any assistants</li>
                <li>The main seller must be at the booth the majority of the time when selling merchandise</li>
                <li>All legal names and contact information provided in the application is for our internal use only</li>
                <li>No food or drink is permitted to be sold to attendees</li>
                <li>Late applications will not be accepted</li>
                <li>All sellers are responsible for their booth, their items, and bear all risks for items brought for sale</li>
                <li>All artwork and merchandise must be your own</li>
                <li>The artist is not allowed to sell other people's merchandise without their permission</li>
                <li>No elements of tracing found on any artwork</li>
                <li>No use of trademarked images in any products</li>
                <li>Kisetsucon staff reserves the right to deny any seller from sale day-of</li>
              </ul>

              <h3>Application Process</h3>
              <ul>
                <li>Apply online using the form. Applications close May 1st, 2020.</li>
                <li>
                  A portfolio is required for all interested individuals.
                  <ul>
                    <li>These include: a public Facebook album, a personal website, Etsy store, etc.</li>
                    <li>The artist's professional name/alias must be included in the portfolio</li>
                    <li>The portfolio must include some of the items that the artist plans on selling</li>
                  </ul>
                </li>
                <li>Once applications close, Kisetsucon staff will select artists based on a balance of variety of items being sold and quality.</li>
                <li>After applications have been closed, you will be notified via email or your acceptance status after we have gone through our screening process.</li>
                <li>
                  Should you be accepted, you will be required to pay prior to your arrival.
                  <ul>
                    <li><strong>Cost for Artist is $70 for Kisetsucon 2020</strong></li>
                  </ul>
                </li>
                <li>The payment will guarantee you a table, up to 2 chairs, and up to 2 Artist Badges.</li>
              </ul>

              <h3>Cancellations</h3>
              <ul>
                <li>Please contact Kisetsucon staff (info@kisetsucon.org) if you wish to cancel your planned sale at Kisetsucon. All cancellations are final.</li>
                <li>Upon cancellation, Kisetsucon will refund the artist. Then, a wait-listed artist will take their place.</li>
                <li>All cancellations eligible for refund must be requested before August 1st, 2020</li>
              </ul>

              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://docs.google.com/document/d/e/2PACX-1vQmUxg3ONHrHfRECRsvDltEIVVu7QG1WJ7XLkrD7eEPBYuGagvuaPeEmtfX_JNRfXuI2vnI5_qDyHO7/pub'
              >
                Artist Terms & Agreement
              </a>
            </div>
            <div className={classes.registrationButton}>
              <Button
                variant='contained'
                color='primary'
                target='_blank'
                rel='noopener noreferrer'
                href='https://docs.google.com/forms/d/e/1FAIpQLSeKMqeD0Cw4HZPv1okurZMQMM8yn4zfHuv4fvZQHo9jX-QaZw/viewform?usp=sf_link'>
                  Apply Now
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls='vendor-content'
            id='vendor-header'
          >
            Vendor
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <h3>General Guidelines</h3>
              <ul>
                <li>The seller submitting the application will be considered the main point of contact and will be responsible for any assistants</li>
                <li>The main seller must be at the booth the majority of the time when selling merchandise</li>
                <li>All legal names and contact information provided in the application is for our internal use only</li>
                <li>No food or drink is permitted to be sold to attendees</li>
                <li>Late applications will not be accepted</li>
                <li>All sellers are responsible for their booth, their items, and bear all risks for items brought for sale</li>
                <li>No bootleg merchandise of any kind (defined as merchandise attempted to pass off as authentic, official merchandise)</li>
                <li>If Kisetsucon staff find or suspect any potential bootleg merchandise, Kisetsucon staff will investigate and potentially remove the vendor from the event</li>
                <li>No fan-art of any kind. Vendors are businesses interested in selling officially licensed merchandise</li>
                <li>Kisetsucon staff reserves the right to deny any seller from sale day-of</li>
              </ul>

              <h3>Application Process</h3>
              <ul>
                <li>Apply online using the form. Applications close May 1st, 2020.</li>
                <li>A website or URL to storefront is required for vendors</li>
                <li>Once applications close, Kisetsucon staff will select vendors based on a balance of variety of items being sold and quality.</li>
                <li>After applications have been closed, you will be notified via email or your acceptance status after we have gone through our screening process.</li>
                <li>
                  Should you be accepted, you will be required to pay prior to your arrival.
                  <ul>
                    <li><strong>Cost for Vendor is $150 for Kisetsucon 2020</strong></li>
                  </ul>
                </li>
                <li>The payment will guarantee you 2 tables, 2 chairs, and 2 Vendor Badges.</li>
              </ul>

              <h3>Cancellations</h3>
              <ul>
                <li>Please contact Kisetsucon staff (info@kisetsucon.org) if you wish to cancel your planned sale at Kisetsucon. All cancellations are final.</li>
                <li>Upon cancellation, Kisetsucon will refund the vendor.</li>
                <li>All cancellations eligible for refund must be requested before August 1st, 2020</li>
              </ul>

              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://docs.google.com/document/d/e/2PACX-1vT48GiwGd4I4GAVLWciBpZ46JhA3-DQoMfeItAjJH_S6s88pchi1pQyJq7qBjfPlB36XcmoOuIxKZCs/pub'
              >
                Vendor Terms & Agreement
              </a>
            </div>
            <div className={classes.registrationButton}>
              <Button
                variant='contained'
                color='primary'
                target='_blank'
                rel='noopener noreferrer'
                href='https://docs.google.com/forms/d/e/1FAIpQLScvDDbNRme0ioK8ymeFBBxKHYbH1J1kotE1-uPz-S8e4RIreQ/viewform?usp=sf_link'>
                  Apply Now
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls='panelist-content'
            id='panelist-header'
          >
            Panelist [Preparing Applications]
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <h3>General Guidelines</h3>
              <ul>
                <li>All panelists MUST preregister in order for their panel to be accepted.</li>
                <li>If you have multiple people in your panel group, only one application must be filled out. The panelist who completes the form will be considered the Lead Panelist and will be used as our main point of contact.</li>
                <li>If you wish to host multiple panels, please complete a separate form for each panel.</li>
                <li>No food is permitted to be served to attendees.</li>
                <li>Panelists must be at least 16 years of age.</li>
              </ul>

              <h3>Reimbursement</h3>
              <ul>
                <li>Panel groups will be reimbursed the cost of one badge following the conclusion of the convention.</li>
                <li>Kisetsucon does not offer free badges to panelists, but will reimburse lead panelists the full value of one badge after the convention has concluded.</li>
                <li>All reimbursements are handled digitally through our ticketing system.</li>
                <li>Panelists who either cancel or fail to check-in will not receive reimbursement.</li>
              </ul>

              <h3>Cancellations</h3>
              <ul>
                <li>If you are a lead panelist, please contact our Panels Coordinator at panels@kisetsucon.org to cancel your panel. All panel cancellations are final.</li>
                <li>Upon cancellation, a wait-listed panel of equal length will take its place.</li>
                <li>All cancellations must be requested before August 1st, 2020</li>
              </ul>
            </div>
            <div className={classes.registrationButton}>
              <Button
                variant='contained'
                color='primary'
                target='_blank'
                rel='noopener noreferrer'
                href='#'>
                  Apply Now
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls='volunteer-content'
            id='volunteer-header'
          >
            Volunteer [Preparing Applications]
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <p>
                Volunteers are the backbone behind any successful convention. All our staff are volunteers as well.
                There are some great perks that we can provide to our volunteers if you have worked a certain amount of hours.
                Additionally, if you're a student in need of volunteer hours, we are a registered 501(c)(3) non-profit, so we can provide documentation of your work with us.
              </p>
              <p>To be eligible to be a volunteer, you will be required to purchase a badge before the event begins.</p>

              <h3>Volunteer Perks</h3>
              <ul>
                <li>Free meals and drinks provided throughout the day</li>
                <li>
                  Work X amount of hours to get these benefits:
                  <ul>
                    <li>3 hours - Regular badge refund</li>
                    <li>6 hours - Badge for next year's event</li>
                    <li>8 hours - Invitation to post-event staff party</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={classes.registrationButton}>
              <Button
                variant='contained'
                color='primary'
                target='_blank'
                rel='noopener noreferrer'
                href='#'>
                  Apply Now
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </Layout>
  )
}

export default RegistrationPage
