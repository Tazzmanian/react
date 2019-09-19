import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

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
        Page Not Found 404!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
            <Route component={NotFoundExpensePage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
