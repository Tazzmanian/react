import React from 'react';

import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: null
    }

    clearSelectedOption = () => {
        this.setState(() => ({selectedOption: null}));
    }

    componentDidMount = () => {
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

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('save data');
        }
        console.log('update');
    }

    componentWillUnmount = () => {
        console.log('unmount');
    }

    handleAddOptions = (option) => {
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

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(x => x !== option)
        }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
    }

    hasOptions = () => {
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption}
                />
            </div>
        );
    }
}
