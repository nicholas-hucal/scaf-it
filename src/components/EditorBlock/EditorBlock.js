import './EditorBlock.scss';
import React from 'react';
import EditorRow from '../../components/EditorRow/EditorRow';
import deleteIcon from '../../assets/icons/trash.svg';
import editIcon from '../../assets/icons/edit.svg';
import addIcon from '../../assets/icons/add.svg';

const EditorBlock = ({ block, rows, children, blockToggle, rowToggle, childToggle, deleteBlock, deleteRow, deleteChild }) => {
    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${block.name}--${mod}` : ''
        }).join('')
    }

    return (
        <div className='editor-block'>
            <pre className='editor-block__code'>
                <div className='editor-block__buttons'>
                    <button className='editor-block__action' onClick={() => blockToggle('edit')}>
                        <img className='editor-block__icon' src={editIcon} alt="edit row" />
                    </button>
                    <button className='editor-block__action' onClick={() => deleteBlock()}>
                        <img className='editor-block__icon' src={deleteIcon} alt="delete row" />
                    </button>
                    <button className='editor-row__action' onClick={(e) => rowToggle('add')}>
                        <img className='editor-row__icon' src={addIcon} alt="add row" />
                    </button>
                </div>
                <code>
                    {`<${block.type} className="${block.name}${formatMods(block.modifiers)}">`}
                        {rows.map(row => {
                            return <EditorRow
                                key={`row-${row.id}`}
                                block={block}
                                row={row}
                                children={children}
                                rowToggle={rowToggle}
                                childToggle={childToggle}
                                deleteRow={deleteRow}
                                deleteChild={deleteChild}
                            />
                        })}
                    {`</${block.type}>`}
                </code>
            </pre>
        </div>
    )
}

export default EditorBlock