console.log('App.js is running!')


const name = 'tst'
const list = {
    one: 'One',
    two: 'Two'
}

function three(num) {
    if( num === 3) {
        return 'Three';
    }
    return 'Unknown';
}

function four(num) {
    if( num === 4) {
        return <li>Four</li>;
    }
}
// JSX - JavaScript XML
const template = (
    <div>
        <h1>{name.toUpperCase()}</h1>
        <p>This is something new app.js!</p>
        <ol>
            <li>{list.one}</li>
            <li>{list.two}</li>
            <li>{three(3)}</li>
            <li>{three()}</li>
            {
                four(4)
            }
            {
                four()
            }
            {
                true ? <li>Five</li> : ''
            }
            {
                (6 === 6) && <li>Six</li>
            }
        </ol>
    </div>
);


let count = 0;
const addOne = () => {
    count++;
    console.log(count);
    render();
}
const minusOne = () => {
    count--;
    render();
}

const options = [];

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (!option) {
        return;
    }
    options.push(option);
    event.target.elements.option.value = '';
    render();
}

const render = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button id="plus" className="button" onClick={addOne}>+1</button>
            <button id="minus" className="button" onClick={minusOne}>-1</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <p>{options.length}</p>
        </div>
    );
    const appRoot = document.getElementById('app');
    ReactDOM.render(template2, appRoot);
}

render();
