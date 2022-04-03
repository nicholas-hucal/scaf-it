import React from 'react';
import './EditorContent.scss';
import Button from '../Button/Button';
import editor from '../../assets/images/editor.png';

const EditorContent = ({ blockToggle }) => {
    return (
        <section className='editor-content'>
            <Button text='add content +' onClick={blockToggle} />
            <div className='editor-content__instructions'>
                <div className='editor-content__details'>
                    <h2 className='editor-content__heading'>Instructions</h2>
                    <p>
                        Simply follow the instructions below to get started.
                    </p>
                    <ol className='editor-content__list'>
                        <li className='editor-content__list-item'>click the add content button above</li>
                        <li className='editor-content__list-item'>add your element's type in the modal</li>
                        <li className='editor-content__list-item'>add your element's name in the modal </li>
                        <li className='editor-content__list-item'>add any modifiers of your element in a comma and space seperated list (i.e. active, hover etc)</li>
                        <li className='editor-content__list-item'>click save</li>
                        <li className='editor-content__list-item'>to nest an element inside click the plus sign on your newly created element</li>
                        <li className='editor-content__list-item'>you can also edit or delete the element by clicking the other buttons</li>
                        <li className='editor-content__list-item'>repeat these steps for as many nested elements as you have</li>
                        <li className='editor-content__list-item'>you can nest up to two levels of elements and unlimited number of elements at each level</li>
                        <li className='editor-content__list-item'>once complete click the generate button to be forwarded to a download link to retrieve your files</li>
                        <li className='editor-content-_list-item'>you can access previously created components by clicking the user icon at the top right</li>
                    </ol>
                </div>
                <div className='editor-content__editor'>
                    <img className='editor-content__image' src={editor} alt="diagram of editor" />
                </div>
            </div>
        </section>
    )
}

export default EditorContent