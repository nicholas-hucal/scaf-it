import React from 'react';
import './Card.scss'

const Card = ({card}) => {
    const {heading, info, image, alt, mod} = card;

    return (
        <div className='card'>
            <div className={`card__details ${mod && 'card__details--' + mod}`}>
                <h2 className='card__heading'>{heading}</h2>
                <p className='card__info'>{info}</p>
            </div>
            <img className='card__image' src={image} alt={alt} />
        </div>
    )
}

export default Card