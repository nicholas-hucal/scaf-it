import React from 'react';
import Triangle from '../Triangle/Triangle';
import './Loading.scss';

const Loading = () => {
  return (
      <div className='loading'>
          <h1>Loading...</h1>
          <Triangle animation={true} mod='grey' />
      </div>
  )
}

export default Loading