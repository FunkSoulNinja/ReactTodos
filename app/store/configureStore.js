import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { mainReducer } from '../reducers';

export const configure = (initialState = {}) => {
    const reducer = combineReducers({
        app: mainReducer
    });

    const store = createStore(reducer, initialState, compose(
        applyMiddleware(reduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
