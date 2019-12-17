import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

import Logo from './Logo'
import DrawerItem from './DrawerItem'
import SocialIcon from './SocialIcon'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 165px)'
  },
  menuButton: {
    position: 'absolute',
    top: '-3px',
    left: '10px',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  menuButtonText: {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    marginLeft: '6px'
  },
  social: {
    padding: '10px 8px 4px',
    textAlign: 'center',
    backgroundColor: '#f1f1f1'
  },
  logo: {
    padding: theme.spacing(2, 2, 1)
  },
  copyright: {
    fontSize: '0.75rem',
    textAlign: 'center',
    color: '#9c9c9c'
  }
}))

const Navigation = () => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <>
      <div className={classes.drawerPaper}>
        <DrawerItem title='Home' icon='home' />
        <DrawerItem title='Guests' icon='people' />
      </div>
      <div className={classes.social}>
        <SocialIcon fb href='https://facebook.com/Kisetsucon' />
        <SocialIcon ig href='https://instagram.com/Kisetsucon' />
        <SocialIcon tw href='https://twitter.com/Kisetsucon' />
        <SocialIcon web href='https://kisetsucon.org' />
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
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon /><span className={classes.menuButtonText}>Menu</span>
        </IconButton>
        <SwipeableDrawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          variant='permanent'
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Navigation
