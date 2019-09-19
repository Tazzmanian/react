import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

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
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create</NavLink></li>
            <li><NavLink to="/edit" activeClassName="is-active">Edit</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
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
