import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const HeaderContainer = props => {
    return (
        <div className = "header">
            <ImageThumbnail />
            <div className = "headerText">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderContainer;
