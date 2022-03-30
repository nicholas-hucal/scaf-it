import './EditorBlock.scss';
import React from 'react';
import EditorRow from '../../components/EditorRow/EditorRow';

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