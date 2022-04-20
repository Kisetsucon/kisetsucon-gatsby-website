import React from 'react'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Logo from '../Logo'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: 2,
    backgroundColor: '#ec9d57',
    border: '4px solid brown',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }
  },
  info: {
    flex: '1 1 auto',
    padding: theme.spacing(2),
    maxWidth: 1000,
    color: '#eee',
    textShadow: '0 2px 2px #0c3b3b'
  },
}))

const Intro = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container} fixed>
      <div className={classes.info}>
        <Logo />
        <br />
        <div>
          <h1>Kisetsucon Inc. is Ending Down All Operations</h1>
          <p>Hi everyone! It was a good run while it lasted. We started back in the summer of 2018 as a small group of ex-convention organizers to help create a local convention for Western New York folks (namely Buffalo and Rochester) to fill the void of events in the area.</p>
          <p>We had our first ever event in 2019 and it was a massive success and we immediately began planning for next year. But then COVID came through and shook the entire world. We were small enough that we could push back our event without losing lots of money, unlike other larger events. Although we could keep the convention afloat, we can't say the same for our staffers. A lot of our lives and living situations were changed due to the pandemic.</p>
          <p>We tried to hold out as much as we could, but as it is now, there's only a couple of staffers left actually in the WNY region that are willing to organize the convention. (Even I, the president, don't live in NY anymore)</p>
          <p>So Kisetsucon is unfortunately over and Kisetsucon, Inc. is shutting down all operations (email, social media, etc).</p>
          <h3>Thank you to everyone that supported Kisetsucon!</h3>
        </div>
      </div>
    </Container>
  )
}

export default Intro
