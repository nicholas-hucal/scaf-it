import './EditorChild.scss';
import React, {useState} from 'react';
import deleteIcon from '../../assets/icons/trash.svg';
import editIcon from '../../assets/icons/edit.svg';

const EditorChild = ({ block, row, childToggle, deleteChild }) => {
    const [deleting, setDeleting] = useState(false);

    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${block.name}__${row.name}--${mod}` : ''
        }).join('')
    }

    const addDeleteAnimation = () => {
        setDeleting(true)
        setTimeout(() => {
            deleteChild(row.id);
            setDeleting(false)
        }, 400)
    }

    return (
        <div className={`editor-child ${deleting && 'editor-child--shrink'}`}>
            <div className='editor-child__buttons'>
                <button className='editor-child__action' onClick={() => childToggle('edit', row.parent_id, row.id)}>
                    <img className='editor-child__icon' src={editIcon} alt="edit row" />
                </button>
                <button className='editor-child__action' onClick={addDeleteAnimation}>
                    <img className='editor-child__icon' src={deleteIcon} alt="delete row" />
                </button>
            </div>
            <pre className={`editor-child__code`}>
                <code>
                    {(row.type === 'input' || row.type === 'img') &&
                        `<${row.type} className="${block.name}__${row.name}${formatMods(row.modifiers)}"/>`
                    }
                    {(row.type !== 'input' && row.type !== 'img') &&
                        `<${row.type} className="${block.name}__${row.name}${formatMods(row.modifiers)}"></${row.type}>`
                    }
                </code>
            </pre>
        </div>
    )
}

export default EditorChild