import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { Facebook, Instagram, Twitter, Language, Mail } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  externalLink: {
    color: 'grey',
    margin: '0 4px',
    transition: 'all 0.25s',
    '&:hover': {
      color: '#353535'
    }
  },
  socialIcon: {
    width: '1.1em',
    height: '1.1em',
    [theme.breakpoints.only('sm')]: {
      width: '0.875em',
      height: '0.875em'
    }
  }
}))

const ExternalLink = ({ children, href }) => {
  const classes = useStyles()

  return <a className={classes.externalLink} href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
}

const SocialIcon = ({ fb, ig, tw, web, email, href }) => {
  const classes = useStyles()

  if (fb) {
    return <ExternalLink href={href}><Facebook className={classes.socialIcon} /></ExternalLink>
  } else if (ig) {
    return <ExternalLink href={href}><Instagram className={classes.socialIcon} /></ExternalLink>
  } else if (tw) {
    return <ExternalLink href={href}><Twitter className={classes.socialIcon} /></ExternalLink>
  } else if (web) {
    return <ExternalLink href={href}><Language className={classes.socialIcon} /></ExternalLink>
  } else if (email) {
    return <ExternalLink href={href}><Mail className={classes.socialIcon} /></ExternalLink>
  }
}

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string
}

SocialIcon.propTypes = {
  fb: PropTypes.bool,
  ig: PropTypes.bool,
  tw: PropTypes.bool,
  web: PropTypes.bool,
  email: PropTypes.bool,
  href: PropTypes.string
}

SocialIcon.defaultProps = {
  fb: false,
  ig: false,
  tw: false,
  web: false,
  email: false,
  href: ''
}

export default SocialIcon
