import React from 'react';
import './ElementForm.scss';

const ElementForm = ({block}) => {
    return (
        <div className='element-form' id={id}>
            <select>
                <option>main</option>
                <option>header</option>
                <option>footer</option>
                <option>aside</option>
                <option>section</option>
                <option>nav</option>
                <option>div</option>
                <option>a</option>
                <option>button</option>
                <option>ol</option>
                <option>ul</option>
                <option>li</option>
                <option>image</option>
                <option>form</option>
                <option>input</option>
                <option>textarea</option>
                <option>label</option>
                <option>table</option>
            </select>
            <p>{block}__</p>
            <input className='element__name' placeholder='element' />
            <p>--</p>
            <input className='element__modifier' placeholder='modifiers' />
        </div>
    )
}

export default ElementForm