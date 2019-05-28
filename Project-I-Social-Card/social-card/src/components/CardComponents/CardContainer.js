import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'


const CardContainer = props => {
    return (
        <div className = "cardContainer" href = "https://www.reactjs.org">
            <CardBanner />
            <CardContent />
        </div>
    )
}

// let cardContainer = document.querySelector(".cardContainer");
// cardContainer.addEventListener('click', function(){
//     console.log("HELLO");
// })

export default CardContainer;