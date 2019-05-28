import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'


const CardContainer = props => {
    return (
        <a className = "cardContainer" href = "https://www.reactjs.org">
            <CardBanner />
            <CardContent />
        </a>
        
    )
}



export default CardContainer;