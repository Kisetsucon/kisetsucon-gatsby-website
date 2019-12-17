import React from 'react'
import PropTypes from 'prop-types'

import { Facebook, Instagram, Twitter, Language } from '@material-ui/icons'

const ExternalLink = ({ children, href }) => {
  const linkStyle = {
    color: 'grey',
    margin: '0 4px'
  }

  return <a style={linkStyle} href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
}

const SocialIcon = ({ fb, ig, tw, web, href }) => {
  const iconStyle = {
    width: '1.1em',
    height: '1.1em'
  }

  if (fb) {
    return <ExternalLink href={href}><Facebook style={iconStyle} /></ExternalLink>
  } else if (ig) {
    return <ExternalLink href={href}><Instagram style={iconStyle} /></ExternalLink>
  } else if (tw) {
    return <ExternalLink href={href}><Twitter style={iconStyle} /></ExternalLink>
  } else if (web) {
    return <ExternalLink href={href}><Language style={iconStyle} /></ExternalLink>
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
  href: PropTypes.string
}

SocialIcon.defaultProps = {
  fb: false,
  ig: false,
  tw: false,
  web: false,
  href: ''
}

export default SocialIcon
