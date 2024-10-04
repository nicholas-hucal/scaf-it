import './TriangleSingle.scss';

const TriangleSingle = ({ piece, color }) => {
    return (
        <div className={`triangle-single`}>
            {piece === 'left' &&
                <div className={`triangle-single__shape triangle-single__shape--left ${color ? `triangle-single__shape--${color}` : ''}`}></div>
            }
            {piece === 'right' &&
                <div className={`triangle-single__shape triangle-single__shape--right ${color ? `triangle-single__shape--${color}` : ''}`}></div>
            }
        </div>
    )
}

export default TriangleSingle