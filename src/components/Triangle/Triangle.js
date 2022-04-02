import './Triangle.scss';

const Triangle = ({last, mod, animation}) => {
    return (
        <div className={`triangle ${last && 'triangle--last'} ${animation && 'triangle--animate'}`}>
            <div className={`triangle__shape triangle__shape--left ${mod && 'triangle__shape--grey'}`}></div>
            <div className={`triangle__shape triangle__shape--right ${mod && 'triangle__shape--grey'}`}></div>
        </div>
    )
}

export default Triangle