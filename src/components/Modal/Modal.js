import './Modal.scss';
import React, { useState } from 'react';
import close from '../../assets/icons/cancel-small.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Autocomplete from '../Autocomplete/Autocomplete';
import suggestions from '../../data/containers';

const Modal = ({ modalToggle, block, parent, rowToEdit, addBlock, addRow, addChild, editBlock, editRow, editChild, setParent, basicRow }) => {
    const [row, setRow] = useState(rowToEdit ? rowToEdit : basicRow);
    const [error, setError] = useState(false);

    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${block.name !== '' && !row.parent ? `${block.name}__` : ''}${row.name}--${mod}` : ''
        }).join('')
    }

    const changeName = (e) => {
        const value = e.target.value.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
        let newRow = { ...row };
        newRow.name = value;
        setRow(newRow)
    }

    const changeType = (value) => {
        if (typeof value !== 'undefined') {
            value = value.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
            let newRow = { ...row };
            newRow.type = value;
            setRow(newRow)
        }
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

    const validateFields = () => {
        if (row.type.length < 1 || row.name.length < 1) {
            setError(true)
            return false
        } else {
            setError(false)
            return true
        }
    }

    const submitRow = (e) => {
        e.preventDefault();
        if (validateFields()) {
            row.parent = parent;
            if (!parent.kind) {
                row.kind = 'block';
                if (!rowToEdit.name) {
                    addBlock(row)
                } else {
                    editBlock(row)
                }
            }
            if (parent.kind === 'block') {
                row.kind = 'element';
                if (!rowToEdit.name) {
                    addRow(row)
                } else {
                    editRow(row)
                }
            }
            if (parent.kind === 'element') {
                row.kind = 'child';
                if (!rowToEdit.name) {
                    addChild(row)
                } else {
                    editChild(row)
                }
            }
            modalToggle()
        }
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
                                `<${row.type} className="${block.name !== '' && !row.parent ? `${block.name}__` : ''}${row.name}${formatMods(row.modifiers)}"/>`
                                :
                                `<${row.type} className="${block.name !== '' && !row.parent ? `${block.name}__` : ''}${row.name}${formatMods(row.modifiers)}"></${row.type}>`
                            }
                        </code>
                    </pre>
                    {error && <div className='modal__error'>Please fill out the name and type fields</div>}
                    <Autocomplete suggestions={suggestions} value={row.type} changeType={changeType} />
                    <Input label='element name' value={row.name} onChange={changeName} />
                    <Input label='modifiers' value={row.modifiers.join(', ')} onChange={changeMods} />
                    <Button className="modal__submit" text='save' onClick={(e) => submitRow(e)} />
                </div>
            </div>
        </div>
    )

}

export default Modal