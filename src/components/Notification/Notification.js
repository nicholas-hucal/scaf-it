import React from 'react';
import './Notification.scss';

const Notification = ({title, body}) => {
  return (
    <section className={`notification`}>
        <p className='notification__title'>{title}</p>
        <p className='notification__body'>{body}</p>
    </section>
  )
}

export default Notification