import './EditorRow.scss';
import React from 'react';
import deleteIcon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/edit.svg';

const EditorRow = ({ row, block, actions }) => {
    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${block.name}__${row.name}--${mod}` : ''
        }).join('')
    }

    return (
        <div className='editor-row'>
            <div className='editor-row__buttons'>
                <button className='editor-row__action' onClick={(e) => actions.editRow(e, row.id)}><img className='editor-row__icon' src={editIcon} alt="edit row" /></button>
                <button className='editor-row__action' onClick={(e) => actions.deleteRow(e, row.id)}><img className='editor-row__icon' src={deleteIcon} alt="delete row" /></button>
            </div>
            <pre className='editor-row__code'>
                <code>
                    {row.type === 'input' || row.type === 'img' ?
                        `<${row.type} className="${block.name}__${row.name}${formatMods(row.modifiers)}"/>`
                        :
                        `<${row.type} className="${block.name}__${row.name}${formatMods(row.modifiers)}"></${row.type}>`
                    }
                </code>
            </pre>
        </div>
    )
}

export default EditorRow