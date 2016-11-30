import { combineReducers, createStore, compose } from 'redux';
import { mainReducer } from '../reducers';

export const configure = () => {
    const reducer = combineReducers({
        app: mainReducer
    });

    const store = createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
