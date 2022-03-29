import './Modal.scss';
import React, { useState, useEffect } from 'react';
import close from '../../assets/icons/cancel-small.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Autocomplete from '../Autocomplete/Autocomplete';
import suggestions from '../../data/containers';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ modalToggle, addRow }) => {
    const [row, setRow] = useState({ name: '', type: 'div', modifiers: [] });
    
    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${row.name}--${mod}` : ''
        }).join('')
    }
    
    const changeName = (e) => {
        const value = e.target.value.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
        let newRow = { ...row };
        newRow.name = value;
        setRow(newRow)
    }
    
    const changeType = (value) => {
        value = value.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
        let newRow = { ...row };
        newRow.type = value;
        setRow(newRow)
    }
    
    const changeMods = (e) => {
        let mods = e.target.value
        mods = mods.split(', ');
        const formatted = mods.map(mod => {
            return mod.replace(/[^,A-Z0-9]+/ig, "-").toLowerCase();
        });
        let newRow = { ...row };
        newRow.modifiers = formatted;
        setRow(newRow)
    }
    
    const keyDownMods = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            let mods = e.target.value + ', ';
            let splitMods = mods.split(', ');
            let newRow = { ...row };
            newRow.modifiers = splitMods;
            setRow(newRow)
        }
    }

    const submitRow = (e) => {
        e.preventDefault();
        row.id = uuidv4();
        addRow(row);
        modalToggle(e)
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
                            {row.type === 'input' || row.type === 'img' ?
                                `<${row.type} className="${row.name}${formatMods(row.modifiers)}"/>`
                                :
                                `<${row.type} className="${row.name}${formatMods(row.modifiers)}"></${row.type}>`
                            }
                        </code>
                    </pre>
                    <Autocomplete suggestions={suggestions} value={row.type} changeType={changeType} />
                    <Input label='element name' value={row.name} onChange={changeName} />
                    <Input label='modifiers' value={row.modifiers.join(', ')} onKeyDown={keyDownMods} onChange={changeMods} />
                    <Button className="modal__submit" text='save' onClick={(e) => submitRow(e)}/>
                </div>
            </div>
        </div>
    )

}

export default Modal