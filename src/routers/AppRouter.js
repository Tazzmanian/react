import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFound from '../components/NotFound';
import HelpExpensePage from '../components/Help';
import EditExpensePage from '../components/EditExpense';
import AddExpensePage from '../components/AddExpense';
import ExpenseDashboardPage from '../components/Dashboard';
import Header from '../components/Header';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
