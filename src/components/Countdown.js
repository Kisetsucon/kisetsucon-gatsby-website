import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: theme.spacing(1),
    background: 'rgba(0, 0, 0, 0.2)'
  },
  cdBox: {
    fontSize: '1.1rem',
    fontWeight: '400',
    color: '#eee'
  },
  numbers: {
    textAlign: 'center',
    margin: 0,
    textShadow: '0 2px 2px #0c3b3b',
  },
  strings: {
    textAlign: 'center',
    margin: 0,
    textShadow: '0 2px 2px #0c3b3b',
  }
}))

const Countdown = ({ time }) => {
  const classes = useStyles()
  const days = React.createRef()
  const hours = React.createRef()
  const minutes = React.createRef()
  const seconds = React.createRef()

  let interval = null

  // Countdown Logic
  const setCountdown = () => {
    if (days.current !== null && hours.current !== null && minutes.current !== null && seconds.current !== null) {
      // Get times in seconds
      const eventDate = Date.parse(time) / 1000
      const currentDate = Math.floor(Date.now() / 1000)

      if (eventDate <= currentDate) {
        clearInterval(interval)
      }

      // Get times separated
      let s = eventDate - currentDate
      const d = Math.floor(s / 86400)
      s -= d * 86400

      const h = Math.floor(s / 3600)
      s -= h * 3600

      const m = Math.floor(s / 60)
      s -= m * 60

      // Set text if singular
      d === 1 ? (days.current.innerHTML = 'Day') : (days.current.innerHTML = 'Days')
      h === 1 ? (hours.current.innerHTML = 'Hour') : (hours.current.innerHTML = 'Hours')
      m === 1 ? (minutes.current.innerHTML = 'Minute') : (minutes.current.innerHTML = 'Minutes')
      s === 1 ? (seconds.current.innerHTML = 'Second') : (seconds.current.innerHTML = 'Seconds')

      // Format result
      const dayText = String(d).length >= 2 ? d : '0' + d
      const hourText = String(h).length >= 2 ? h : '0' + h
      const minuteText = String(m).length >= 2 ? m : '0' + m
      const secondText = String(s).length >= 2 ? s : '0' + s

      if (!isNaN(eventDate)) {
        days.current.innerHTML = dayText
        hours.current.innerHTML = hourText
        minutes.current.innerHTML = minuteText
        seconds.current.innerHTML = secondText
      } else {
        console.log('Invalid date. Example: 13 October 2019 10:00:00')
        clearInterval(interval)
      }
    }
  }

  interval = setInterval(setCountdown, 1000)

  return (
    <div className={classes.root}>
      <div className={classes.cdBox}>
        <p className={classes.numbers} ref={days}>00</p>
        <p className={classes.strings}>Days</p>
      </div>
      <div className={classes.cdBox}>
        <p className={classes.numbers} ref={hours}>00</p>
        <p className={classes.strings}>Hours</p>
      </div>
      <div className={classes.cdBox}>
        <p className={classes.numbers} ref={minutes}>00</p>
        <p className={classes.strings}>Minutes</p>
      </div>
      <div className={classes.cdBox}>
        <p className={classes.numbers} ref={seconds}>00</p>
        <p className={classes.strings}>Seconds</p>
      </div>
    </div>
  )
}

Countdown.propTypes = {
  time: PropTypes.node.isRequired
}

export default Countdown
