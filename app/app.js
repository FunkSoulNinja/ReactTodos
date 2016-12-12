import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import firebase from './firebase';
import * as actions from './actions';
import Router from './router';

const store = require('./store/configureStore').configure();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        hashHistory.push('/todos');
    } else {
        hashHistory.push('/');
    }

});

store.dispatch(actions.startAddTodos());

// App styles
require('style!css!sass!applicationStyles');


ReactDOM.render(
    <Provider store={store}>
        {Router}
    </Provider>,
    document.getElementById('app')
);
