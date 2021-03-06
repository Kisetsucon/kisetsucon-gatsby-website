import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { makeStyles } from '@material-ui/core/styles'

import Logo from './Logo'
import DrawerItem from './DrawerItem'
import SocialIcon from './SocialIcon'
import { ConfirmationNumber, Home, Store, People, Event, Help } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#ec9d57',
    display: 'block',
    paddingLeft: theme.spacing(2)
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 175,
      flexShrink: 0
    },
    [theme.breakpoints.up('md')]: {
      width: 240
    }
  },
  physicalDrawer: {
    '& > div': {
      border: 'none !important',
      boxShadow: '18px 0 24px -24px rgba(0,0,0,0.75)'
    }
  },
  drawerPaper: {
    display: 'flex',
    width: 200,
    height: 'calc(100vh - 144px)',
    flexDirection: 'column',
    backgroundColor: '#f1f1f1',
    transition: 'width 0.25s',
    [theme.breakpoints.up('sm')]: {
      width: 175,
      height: 'calc(100vh - 135px)'
    },
    [theme.breakpoints.up('md')]: {
      width: 240,
      height: 'calc(100vh - 164px)'
    }
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  menuButtonText: {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    marginLeft: '6px'
  },
  date: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ff596f',
    textAlign: 'center',
    color: '#fbfbfb'
  },
  social: {
    padding: '10px 8px 4px',
    borderTop: '1px solid #c3c3c3',
    textAlign: 'center',
    backgroundColor: '#f1f1f1'
  },
  logo: {
    backgroundColor: '#f1f1f1',
    padding: theme.spacing(2, 2, 1)
  },
  copyright: {
    fontFamily: 'Roboto',
    backgroundColor: '#f1f1f1',
    fontSize: '0.75rem',
    textAlign: 'center',
    color: '#9c9c9c'
  }
}))

const iconSize = {
  fontSize: 42
}

const Navigation = () => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <>
      <div className={classes.drawerPaper}>
        <div className={classes.date}>October 2nd, 2021</div>
        <DrawerItem registration title='Buy Tickets Now' to='/registration/'><ConfirmationNumber style={{ fontSize: 32 }} /></DrawerItem>
        <DrawerItem title='About' to='/'><Home style={iconSize} /></DrawerItem>
        <DrawerItem title='Registration' to='/registration/'><Store style={iconSize} /></DrawerItem>
        <DrawerItem title='Guests' to='/guests/'><People style={iconSize} /></DrawerItem>
        <DrawerItem title='Events' to='/events/'><Event style={iconSize} /></DrawerItem>
        <DrawerItem title='Rules' to='/rules/'><Help style={iconSize} /></DrawerItem>
      </div>
      <div className={classes.social}>
        <SocialIcon fb href='https://facebook.com/Kisetsucon' />
        <SocialIcon ig href='https://instagram.com/Kisetsucon' />
        <SocialIcon tw href='https://twitter.com/Kisetsucon' />
        <SocialIcon web href='https://kisetsucon.org' />
        <SocialIcon email href='mailto:general@kisetsucon.org' />
      </div>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.copyright}>
        © Kisetsucon, Inc. {new Date().getFullYear()}
      </div>
    </>
  )

  return (
    <nav className={classes.drawer} aria-label='main navigation'>
      <Hidden smUp implementation='css'>
        <AppBar className={classes.appBar} position='fixed'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon /><span className={classes.menuButtonText}>Kisetsucon 2021 - October 2nd, 2021</span>
          </IconButton>
        </AppBar>

        <SwipeableDrawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          className={classes.physicalDrawer}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          variant='permanent'
          open
          className={classes.physicalDrawer}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Navigation
