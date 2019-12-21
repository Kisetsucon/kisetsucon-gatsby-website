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
  },
  map: {
    flex: '1 1 65%',
    padding: theme.spacing(2)
  },
  info: {
    flex: '1 1 35%',
    padding: theme.spacing(2)
  }
}))

const Venue = ({ children }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root} boxShadow={3}>
      <div className={classes.map}>
        <iframe
          title='mapFrame'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.654219125829!2d-77.66129638384723!3d43.04870629932446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d14c0116e03e77%3A0x422a59b5e2bb499a!2sRIT%20Inn%20%26%20Conference%20Center!5e0!3m2!1sen!2sus!4v1576903710039!5m2!1sen!2sus'
          frameBorder='0'
          style={{ border: '0', height: 400, width: '100%' }}
          allowFullScreen='' />
      </div>
      <div className={classes.info}>
        <h4>Address</h4>
        <p style={{ marginBottom: 0 }}>RIT Inn & Conference Center</p>
        <p style={{ marginBottom: 0 }}>5257 West Henrietta Road</p>
        <p>Rochester, NY 14467</p>

        <h4>Food Options</h4>
        <p>Petals Restaurant (7am - 10:30pm)</p>
        <p>We are looking into the possibility of food trucks.</p>

        <h5>Parking is free in their large, open parking lot.</h5>
      </div>
    </Box>
  )
}

export default Venue
