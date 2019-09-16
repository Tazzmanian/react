console.log('App.js is running!')


var name = 'tst'
var list = {
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
var template = (
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
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
