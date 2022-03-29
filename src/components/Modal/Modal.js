import React from 'react';
import './Modal.scss';
import close from '../../assets/icons/cancel-small.svg';
import Input from '../Input/Input';
import Autocomplete from '../Autocomplete/Autocomplete';
import suggestions from '../../data/containers';

const Modal = ({ modalToggle, block, changeBlockName, changeBlockType, changeBlockMods }) => {

    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${block.name}--${mod}` : ''
        }).join('')
    }

    return (
        <div className='modal'>
            <div className='modal__content'>
                <div className='modal__close'>
                    <img src={close} alt="close modal" onClick={modalToggle} />
                </div>
                <div className='modal__body'>
                    <pre className='modal__code'>
                        <code>
                            {block.type === 'input' || block.type === 'img' ?
                                `<${block.type} className="${block.name}${formatMods(block.modifiers)}"/>`
                                : 
                                `<${block.type} className="${block.name}${formatMods(block.modifiers)}"></${block.type}>`
                            }
                        </code>
                    </pre>
                    <Input label='element name' placeholder='element name' value={block.name} onChange={changeBlockName} />
                    <Input label='modifiers' placeholder='modifiers' value={block.modifiers.join(',')} onChange={changeBlockMods} />
                    <Autocomplete suggestions={suggestions} value={block.type} changeBlockType={changeBlockType} />
                </div>
            </div>
        </div>
    )
}

export default Modal