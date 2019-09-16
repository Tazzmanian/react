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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>X</p>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        const options = this.props.options;
        return (
            <div>
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
