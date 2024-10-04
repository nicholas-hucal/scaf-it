import './Triangle.scss';

const Triangle = ({ last, mod, animation, piece }) => {
    return (
        <div className={`triangle ${last && 'triangle--last'} ${animation && 'triangle--animate'}`}>
            {!piece &&
                <>
                    <div className={`triangle__shape triangle__shape--left ${mod && 'triangle__shape--grey'}`}></div>
                    <div className={`triangle__shape triangle__shape--right ${mod && 'triangle__shape--grey'}`}></div>
                </>
            }
            {piece === 'left' &&
                <div className={`triangle__shape triangle__shape--left triangle__shape--blue`}></div>
            }
            {piece === 'right' &&
                <div className={`triangle__shape triangle__shape--right triangle__shape--green`}></div>
            }
        </div>
    )
}

export default Triangle