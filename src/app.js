const obj = {
    name: 've',
    getName() {
        return this.name;
    }
}

class IndecisionApp extends React.Component {
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
    }

    handleAddOptions(option) {
        if (!option) {
            return 'Enter valid value';
        } else if(this.state.options.includes(option)) {
            console.log('Duplicated value');
            return 'Duplicated value';
        }
        this.setState((prevState) => {
            return {
                // options: [...prevState.options, option]
                options: prevState.options.concat(option)
            };
        });
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
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
                />
                <AddOption 
                    handleAddOptions={this.handleAddOptions}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>Indecision: {props.title}</h1>
            <h2>Put .... {props.subTitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick} 
                disabled={!props.hasOptions}>
                    What should I do?
            </button>
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            error: null
        }
    }
    onSubmit(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        event.target.elements.option.value = '';
        this.setState(() => {
            return {
                error: ''
            };
        });
        const error = this.props.handleAddOptions(option);
        this.setState(() => {
            return {
                // error: error
                error
            };
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            <p>Options ({props.options.length}):</p>
            {
                props.options.map(x => <Option key={x} option={x} />)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <p>Option Component is {props.option}</p>
        </div>
    );
};

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
