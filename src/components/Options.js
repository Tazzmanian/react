import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                    onClick={props.handleDeleteOptions}
                    className="button button--link"
                >Remove all</button>
            </div>
            {props.options.length === 0 && <div className="widget-body__message">Please add an option to get started!</div>}
            {
                props.options.map(x => (
                    <Option
                        key={x}
                        option={x}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );

export default Options;
