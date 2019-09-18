import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            <p>Options ({props.options.length}):</p>
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
};

export default Options;
