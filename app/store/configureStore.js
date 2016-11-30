import { combineReducers, createStore, compose } from 'redux';
import { mainReducer } from '../reducers';

export const configure = (initialState = {}) => {
    const reducer = combineReducers({
        app: mainReducer
    });

    const store = createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
