import React from 'react';

const Header = (props) => (
        <div className="header">
            <h1 className="header__title">Indecision: {props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">Put .... {props.subTitle}</h2>}
        </div>
    );

Header.defaultProps = {
    title: 'Default Title',
    subTitle: 'Default SubTitle'
}

export default Header;
