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
        store.dispatch(actions.logIn(user));
        hashHistory.push('/todos');
    } else {
        store.dispatch(actions.logOut());
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
