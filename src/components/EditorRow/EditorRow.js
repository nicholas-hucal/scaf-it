import './EditorRow.scss';
import React from 'react';
import deleteIcon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/edit.svg';
import addIcon from '../../assets/icons/add.svg';

const EditorRow = ({ row, block, actions, child }) => {
    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${block.name}__${row.name}--${mod}` : ''
        }).join('')
    }

    return (
        <div className='editor-row'>
            <div className='editor-row__buttons'>
                <button className='editor-row__action' onClick={(e) => actions.editRowToggle(e, row.id)}>
                    <img className='editor-row__icon' src={editIcon} alt="edit row" />
                </button>
                <button className='editor-row__action' onClick={(e) => actions.deleteRow(e, row.id)}>
                    <img className='editor-row__icon' src={deleteIcon} alt="delete row" />
                </button>
                {(!child && (row.type !== 'input' && row.type !== 'img')) &&
                    <button className='editor-row__action' onClick={(e) => actions.addChildRowToggle(e, row.id)}>
                        <img className='editor-row__icon' src={addIcon} alt="add row" />
                    </button>
                }
            </div>
            <pre className={`editor-row__code ${child && 'editor-row__code--child'}`}>
                <code>
                    {(row.type === 'input' || row.type === 'img') &&
                        `<${row.type} className="${block.name}__${row.name}${formatMods(row.modifiers)}"/>`
                    }
                    {(row.type !== 'input' && row.type !== 'img') &&
                        `<${row.type} className="${block.name}__${row.name}${formatMods(row.modifiers)}">`
                    }
                    {(row.type !== 'input' && row.type !== 'img') &&
                        row.elements.map(element => {
                            return <EditorRow key={`row-${element.id}`} block={block} row={element} actions={actions} child={true}/>
                        })
                    }
                    {(row.type !== 'input' && row.type !== 'img') &&
                        `</${row.type}>`
                    }
                </code>
            </pre>
        </div>
    )
}

export default EditorRow