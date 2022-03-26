import React from 'react';
import './LoginButton.scss';
import github from '../../assets/logos/github-mark-dark.svg';
import SiteLink from '../SiteLink/SiteLink';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LoginButton = () => {
  return (
    <section className='login-button'>
      <h1>Please Login</h1>
      <p>To use the editor on SCAFit you must login. As we are a developer focused site we have opted for a GitHub login</p>
      <img className='login-button__github' src={github} alt="login with github" />
      <SiteLink to={`${SERVER_URL}/auth/github`} text='Login with GitHub' type='anchor'/>
    </section>
  )
}

export default LoginButton