import React from 'react';

import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';


export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Indecision',
            subTitle: 'subTitle',
            options: [1, 2, 3]
        }
        this.hasOptions = this.hasOptions.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if(options) {
                this.setState(() => ({options}));
            }
            console.log('did mount');
        } catch(e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('save data');
        }
        console.log('update');
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    handleAddOptions(option) {
        if (!option) {
            return 'Enter valid value';
        } else if(this.state.options.includes(option)) {
            console.log('Duplicated value');
            return 'Duplicated value';
        }
        this.setState((prevState) => ({
                options: prevState.options.concat(option)
        }));
    }

    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter(x => x !== option)
        }));
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handlePick() {
        alert('pick');
    }

    hasOptions() {
        return this.state.options.length > 0;
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subTitle={this.state.subTitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOptions={this.handleAddOptions}
                />
            </div>
        );
    }
}
