const obj = {
    name: 've',
    getName() {
        return this.name;
    }
}

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subTitle = 'subIndecision';
        const options = [1, 2, 3];
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>Indecision: {this.props.title}</h1>
                <h2>Put .... {this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    handlePick() {
        alert('Handle Pick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class AddOption extends React.Component {

    onSubmit(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        console.log(option);
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll() {
        this.props.options.splice(0,this.props.options.length);
        console.log(this.props.options);
        this.render();
    }

    render() {
        const options = this.props.options;
        return (
            <div>
                <button onClick={this.removeAll}>Remove all</button>
                <p>Options ({options.length}):</p>
                {
                    options.map(x => <Option key={x} option={x} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option Component is {this.props.option}</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
