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
    backgroundColor: '#ec9d57',
    color: '#fbfbfb',
    borderTop: '2px solid #d0d0d0',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s',
    '&:first-of-type': {
      borderTop: 'none'
    },
    '&:hover': {
      backgroundColor: '#b55e17'
    }
  },
  drawerItemActive: {
    backgroundColor: '#b55e17'
  },
  itemTitle: {
    fontFamily: 'Roboto',
    position: 'relative',
    top: -12,
    marginLeft: theme.spacing(1)
  }
}))

const DrawerItem = ({ children, title, to }) => {
  const classes = useStyles()

  if (to !== '') {
    return (
      <Link to={to} className={classes.drawerItem} activeClassName={classes.drawerItemActive}>
        <div>
          <span className={classes.itemContent}>{children}</span>
          <span className={classes.itemTitle}>{title}</span>
        </div>
      </Link>
    )
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
  to: PropTypes.string
}

DrawerItem.defaultProps = {
  title: '',
  to: ''
}

export default DrawerItem
