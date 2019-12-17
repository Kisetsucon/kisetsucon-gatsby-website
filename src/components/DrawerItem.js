import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  drawerItem: {
    flexGrow: 1,
    maxHeight: '175px',
    padding: theme.spacing(4),
    backgroundColor: 'green'
  }
}))

const DrawerItem = ({ title, icon }) => {
  const classes = useStyles()

  return (
    <div className={classes.drawerItem}>
      {title} - {icon}
    </div>
  )
}

DrawerItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}

DrawerItem.defaultProps = {
  title: '',
  icon: ''
}

export default DrawerItem
