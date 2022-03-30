import './EditorBlock.scss';
import React from 'react';
import EditorRow from '../../components/EditorRow/EditorRow';
import deleteIcon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/edit.svg';

const EditorBlock = ({ block, rows, actions }) => {
    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${block.name}--${mod}` : ''
        }).join('')
    }

    if (block.name === '') {
        return 'Please add an element first by clicking the button';
    }

    return (
        <div className='editor-block'>
            <pre className='editor-block__code'>
                <div className='editor-block__buttons'>
                    <button className='editor-block__action' onClick={(e) => actions.editRowToggle(e, true, block)}><img className='editor-block__icon' src={editIcon} alt="edit row" /></button>
                    <button className='editor-block__action' onClick={(e) => actions.deleteRow(e, true, block)}><img className='editor-block__icon' src={deleteIcon} alt="delete row" /></button>
                </div>
                <code>
                    {`<${block.type} className="${block.kind === 'element' ? `${block.name}__${block.name}` : block.name}${formatMods(block.modifiers)}">`}
                        {rows.map(row => {
                            return <EditorRow key={`row-${row.id}`} block={block} row={row} actions={actions} />
                        })}
                    {`</${block.type}>`}
                </code>
            </pre>
        </div>
    )
}

export default EditorBlock