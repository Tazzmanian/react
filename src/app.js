import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';

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

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={AddExpensePage} />
            <Route path="/help" component={AddExpensePage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
