import React from 'react';
import './Modal.scss';
import close from '../../assets/icons/cancel-small.svg';

const Modal = ({modalToggle}) => {
  return (
    <div className='modal'>
        <div className='modal__content'>
            <div className='modal__close'>
                <img src={close} alt="close modal" onClick={modalToggle} />
            </div>
            <div className='modal__body'>Modal</div>
        </div>
    </div>
  )
}

export default Modal