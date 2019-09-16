console.log('App.js is running!')


// JSX - JavaScript XML
var template = (
    <div>
        <h1>LOL</h1>
        <p>This is something new app.js!</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
