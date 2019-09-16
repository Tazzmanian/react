console.log('App.js is running!')


var name = 'tst'
var list = {
    one: 'One',
    two: 'Two'
}
// JSX - JavaScript XML
var template = (
    <div>
        <h1>{name.toUpperCase()}</h1>
        <p>This is something new app.js!</p>
        <ol>
            <li>{list.one}</li>
            <li>{list.two}</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
