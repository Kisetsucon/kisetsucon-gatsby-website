import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  drawerItem: {
    flexGrow: 1,
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'linear-gradient(to left, #ec9d57 50%, #b55e17 50%)',
    backgroundSize: '200% 100%',
    backgroundPosition: 'right bottom',
    backgroundColor: '#ec9d57',
    color: '#fbfbfb',
    borderTop: '2px solid #d0d0d0',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s, background-position 0.4s',
    '&:hover, &:active': {
      backgroundPosition: 'left bottom'
    }
  },
  drawerItemActive: {
    background: '#b55e17'
  },
  registrationItem: {
    padding: theme.spacing(1),
    maxHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'linear-gradient(to left, #ff596f 50%, #e3364d 50%)',
    backgroundSize: '200% 100%',
    backgroundPosition: 'right bottom',
    color: '#fbfbfb',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s, background-position 0.4s',
    '&:hover, &:active': {
      backgroundPosition: 'left bottom'
    }
  },
  itemTitle: {
    display: 'inline-flex',
    fontFamily: 'Roboto',
    position: 'relative',
    top: -12,
    marginLeft: theme.spacing(1)
  }
}))

const DrawerItem = ({ children, title, to, registration }) => {
  const classes = useStyles()

  if (to !== '') {
    if (registration) {
      return (
        <Link to={to} className={classes.registrationItem}>
          <div>
            <span className={classes.itemContent}>{children}</span>
            <span className={classes.itemTitle} style={{ top: -9 }}>{title}</span>
          </div>
        </Link>
      )
    } else {
      return (
        <Link to={to} className={classes.drawerItem} activeClassName={classes.drawerItemActive}>
          <div>
            <span className={classes.itemContent}>{children}</span>
            <span className={classes.itemTitle}>{title}</span>
          </div>
        </Link>
      )
    }
  } else {
    return (
      <div className={classes.drawerItem} activeClassName={classes.drawerItemActive}>
        <div>
          <span className={classes.itemContent}>{children}</span>
          <span className={classes.itemTitle}>{title}</span>
        </div>
      </div>
    )
  }
}

DrawerItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  to: PropTypes.string,
  registration: PropTypes.bool
}

DrawerItem.defaultProps = {
  title: '',
  to: '',
  registration: false
}

export default DrawerItem
