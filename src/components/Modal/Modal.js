import React from 'react';
import './Modal.scss';
import close from '../../assets/icons/cancel-small.svg';
import Input from '../Input/Input';
import Autocomplete from '../Autocomplete/Autocomplete';
import suggestions from '../../data/containers';

const Modal = ({modalToggle, block, changeBlockName, changeBlockType}) => {
  return (
    <div className='modal'>
        <div className='modal__content'>
            <div className='modal__close'>
                <img src={close} alt="close modal" onClick={modalToggle} />
            </div>
            <div className='modal__body'>
                <pre className='modal__code'>
                    <code>
                        {`<${block.type} className="${block.name}"></${block.type}>`}
                    </code>
                </pre>
                <Input label='block name' placeholder='block name' value={block.name} onChange={changeBlockName}/>
                <Input label='element name' placeholder='element name'/>
                <Input label='element type' placeholder='element type'/>
                <Autocomplete suggestions={suggestions} changeBlockType={changeBlockType}/>
            </div>
        </div>
    </div>
  )
}

export default Modal