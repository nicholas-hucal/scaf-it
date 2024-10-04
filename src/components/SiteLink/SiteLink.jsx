import React from 'react';
import { Link } from 'react-router-dom';
import './SiteLink.scss'

const SiteLink = ({ to, text, type }) => {
  if (type === 'anchor') {
    return (
      <a className='site-link' href={to}>{text}</a>
    )
  } else {
    return (
      <Link className='site-link' to={to}>{text}</Link>
    )
  }
}

export default SiteLink