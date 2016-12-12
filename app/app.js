import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import * as actions from './actions';
import Login from './components/Login';

const store = require('./store/configureStore').configure();

// store.subscribe(() => {
//     const state = store.getState();
//     console.log('New state', state);
//     TodoAPI.setTodos(state.todos);
// });
//
// const initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// Load Foundation
// $(document).foundation();

// App styles
require('style!css!sass!applicationStyles');

// ReactDOM.render(
//     <Provider store={store}>
//         <TodoApp />
//     </Provider>,
//     document.getElementById('app')
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="Todos" component={TodoApp} />
                <IndexRoute component={Login} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
