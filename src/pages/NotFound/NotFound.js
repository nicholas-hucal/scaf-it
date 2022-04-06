import React from 'react';
import './NotFound.scss';
import Button from '../../components/Button/Button';

const NotFound = () => {
  return (
    <section className='not-found'>
        <h1 className='not-found__heading'>Not Found</h1>
        <p className='not-found__body'>Please return to the homepage and try your request again</p>
        <Button text="return home" type="link" to="/" />
    </section>
  )
}

export default NotFound