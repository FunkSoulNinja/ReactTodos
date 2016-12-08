import uuid from 'node-uuid';
import moment from 'moment';

import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    ADD_TODOS,
    TOGGLE_SHOW_COMPLETED,
    UPDATE_TODO
} from '../actions/types';

const INITIAL_STATE = {
    searchText: '',
    showCompleted: false,
    todos: []
};

export const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return { ...state, searchText: action.payload };
        case TOGGLE_SHOW_COMPLETED:
            return { ...state, showCompleted: !state.showCompleted };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload] };
        case ADD_TODOS:
            return {
                ...state,
                todos: [...action.payload]
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, ...action.payload.updates };
                    } else {
                        return todo;
                    }
                }) };
        default:
            return state;
    }
};
