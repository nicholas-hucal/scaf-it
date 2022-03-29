import './EditorRow.scss';
import React from 'react';

const EditorRow = ({ row, block }) => {
    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${block.name}__${row.name}--${mod}` : ''
        }).join('')
    }

    return (
        <div className='editor-row'>
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