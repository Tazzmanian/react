import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error: null
    }

    onSubmit = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        event.target.elements.option.value = '';
        this.setState(() => ({error: ''}));
        const error = this.props.handleAddOptions(option);
        this.setState(() => ({error}));
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.onSubmit}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add option</button>
                </form>
            </div>
        )
    }
}
