import firebase, { firebaseRef, githubProvider } from 'app/firebase';
import moment from 'moment';
import _ from 'lodash';

import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    ADD_TODOS,
    TOGGLE_SHOW_COMPLETED,
    UPDATE_TODO,
    LOGIN,
    LOGOUT
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
    return (dispatch) => {
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

export const startAddTodos = () => {
    return (dispatch) => {
        const todosRef = firebaseRef.child('todos');

        return todosRef.once('value').then((s) => {
            dispatch(addTodos(_.map(s.val(), (val, id) => {
                return { ...val, id };
            })));
        });
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
    return (dispatch) => {
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

export const startLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log('Auth worked', result);
        }).catch((error) => {
            console.log('unable to auth', error);
        });
    };
};

export const logIn = (user) => {
    return {
        type: LOGIN,
        payload: user
    };
};


export const startLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut().then(() => {
            console.log('logged out');
        });
    };
};

export const logOut = () => {
    return {
        type: LOGOUT
    };
};
