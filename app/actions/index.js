import firebase, { firebaseRef } from 'app/firebase';
import moment from 'moment';

import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    ADD_TODOS,
    TOGGLE_SHOW_COMPLETED,
    UPDATE_TODO
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

export const startAddTodo = (text) => {
    return (dispatch, getState) => {
        const todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        const todoRef = firebaseRef.child('todos').push(todo);

        return todoRef.then(() => dispatch(addTodo({
            ...todo,
            id: todoRef.key
        })));
    };
};

export const addTodos = (todos) => {
    return {
        type: ADD_TODOS,
        payload: todos
    };
};

export const toggleShowCompleted = () => {
    return {
        type: TOGGLE_SHOW_COMPLETED,
    };
};

export const updateTodo = (id, updates) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id,
            updates
        }
    };
};

export const startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        const todoRef = firebaseRef.child(`todos/${id}`);
        const updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
};
