import './EditorBlock.scss';
import React, {useState} from 'react';
import EditorRow from '../../components/EditorRow/EditorRow';
import deleteIcon from '../../assets/icons/trash.svg';
import editIcon from '../../assets/icons/edit.svg';
import addIcon from '../../assets/icons/add.svg';

const EditorBlock = ({ block, rows, children, blockToggle, rowToggle, childToggle, deleteBlock, deleteRow, deleteChild }) => {
    const [deleting, setDeleting] = useState(false);
    
    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${block.name}--${mod}` : ''
        }).join('')
    }
    const addDeleteAnimation = () => {
        setDeleting(true)
        setTimeout(() => {
            deleteBlock();
            setDeleting(false)
        }, 400)
    }

    return (
        <div className={`editor-block ${deleting && 'editor-child--shrink'}`}>
            <pre className='editor-block__code'>
                <div className='editor-block__buttons'>
                    <button className='editor-block__action' onClick={() => blockToggle('edit')}>
                        <img className='editor-block__icon' src={editIcon} alt="edit row" />
                    </button>
                    <button className='editor-block__action' onClick={addDeleteAnimation}>
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