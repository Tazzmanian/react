import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>Indecision: {props.title}</h1>
            <h2>Put .... {props.subTitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title: 'Default Title'
}

export default Header;
