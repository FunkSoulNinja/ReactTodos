import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    TOGGLE_SHOW_COMPLETED,
    TOGGLE_TODO
} from './types';

export const setSearchText = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: searchText
    };
};

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const toggleShowCompleted = () => {
    return {
        type: TOGGLE_SHOW_COMPLETED,
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};