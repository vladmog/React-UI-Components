import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div>
            <span>Lambda School </span>
            <span className = "titleInfo">@LambdaSchool </span>
            <span className = "titleInfo">26 jan </span>
        </div>
    )
}

export default HeaderTitle;