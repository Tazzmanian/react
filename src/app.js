import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard page
    </div>
);

const AddExpensePage = () => (
    <div>
        Expense page
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit page
    </div>
);

const HelpExpensePage = () => (
    <div>
        Help page
    </div>
);

const NotFoundExpensePage = () => (
    <div>
        Page Not Found 404! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/edit">Edit</Link></li>
            <li><Link to="/help">Help</Link></li>
        </ul>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundExpensePage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
