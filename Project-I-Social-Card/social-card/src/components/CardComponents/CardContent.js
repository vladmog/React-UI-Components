import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className = "cardContent">
            <h3>Get Started with React</h3>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className = "link">reactjs.org</p>
        </div>
    )
}

export default CardContent;