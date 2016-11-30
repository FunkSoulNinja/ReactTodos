import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import {
    setSearchText,
    addTodo,
    toggleShowCompleted,
    toggleTodo
} from './actions';

const store = require('./store/configureStore').configure();

store.subscribe(() => {
    console.log('New state: ', store.getState());
});

store.dispatch(addTodo('Understand this old syntax.'));
store.dispatch(setSearchText('syntax'));
store.dispatch(toggleShowCompleted());

// Load Foundation
$(document).foundation();

// App styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
