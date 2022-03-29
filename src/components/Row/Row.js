import './Row.scss';
import React from 'react';

const Row = ({ row, block }) => {
    const formatMods = (mods) => {
        return mods.map(mod => {
            return mod !== '' ? ` ${row.name}--${mod}` : ''
        }).join('')
    }

    return (
        <div className='row'>
            <pre className={`row__code${row.kind === 'element' ? ' row__code--element' : ''}`}>
                <code>
                    {row.type === 'input' || row.type === 'img' ?
                        `<${row.type} className="${row.kind === 'element' ? `${block.name}__${row.name}` : row.name}${formatMods(row.modifiers)}"/>`
                        :
                        `<${row.type} className="${row.kind === 'element' ? `${block.name}__${row.name}` : row.name}${formatMods(row.modifiers)}"></${row.type}>`
                    }
                </code>
            </pre>
        </div>
    )
}

export default Row