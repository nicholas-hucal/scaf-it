import React from "react";
import './Element.scss';
import containers from '../../data/containers';
import {v4 as uuidv4} from 'uuid';

const Element = ({block, type, name, modifiers, id, changeType, changeName, changeModifier, removeElem, copyElem, addChildRow}) => {
    return (
        <div className='element'>
            <div className='element__bem'>
                <select className='element__select' value={type} onChange={(e) => changeType(e, id)}>
                    {containers.map(container => <option key={uuidv4()} value={container}>{container}</option>)}
                </select>
                <p>{block}__</p>
                <input className='element__name' value={name} placeholder='element' onChange={(e) => changeName(e, id)}/>
                <input className='element__modifier' value={modifiers} placeholder='--modifiers' onChange={(e) => changeModifier(e, id)}/>
            </div>
            <div className='element__buttons'>
                <button className='element__add' onChange={() => addChildRow(id)}>+</button>
                <button className='element__remove' onChange={() => removeElem(id)}>-</button>
                <button className='element__copy' onChange={() => copyElem(id)}>copy</button>
            </div>
        </div>
    )
}

export default Element