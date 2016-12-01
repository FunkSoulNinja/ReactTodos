import uuid from 'node-uuid';
import moment from 'moment';

import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    ADD_TODOS,
    TOGGLE_SHOW_COMPLETED,
    TOGGLE_TODO
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
                todos: [...state.todos, {
                    id: uuid(),
                    text: action.payload,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                  }] };
        case ADD_TODOS:
            return {
                ...state,
                todos: [...action.payload]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        let nextCompleted = !todo.completed;

                        return {
                            ...todo,
                             completed: nextCompleted,
                             completedAt: nextCompleted ? moment().unix() : undefined
                         };
                    } else {
                        return todo;
                    }
                }) };
        default:
            return state;
    }
};
