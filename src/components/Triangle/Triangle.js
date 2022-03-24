import './Triangle.scss';

const Triangle = ({last}) => {
    return (
        <div className={`triangle ${last && 'triangle--last'}`}>
            <div className='triangle__shape triangle__shape--left'></div>
            <div className='triangle__shape triangle__shape--right'></div>
        </div>
    )
}

export default Triangle