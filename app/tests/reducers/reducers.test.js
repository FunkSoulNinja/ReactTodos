import expect from 'expect';
import df from 'deep-freeze-strict';
import uuid from 'node-uuid';
import moment from 'moment';

import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    ADD_TODOS,
    TOGGLE_SHOW_COMPLETED,
    UPDATE_TODO
} from '../../actions/types';

import {
    mainReducer,
} from '../../reducers/index';
import { authReducer } from '../../reducers/auth'

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            const action = {
                type: SET_SEARCH_TEXT,
                payload: 'dog'
            };
            const res = mainReducer(df({}), df(action));

            expect(res.searchText).toEqual(action.payload);
        });

        it('should flip the boolean value of showCompleted', () => {
            const action = {
                type: TOGGLE_SHOW_COMPLETED,
            };
            const res = mainReducer(df({ showCompleted: false }), df(action));

            expect(res.showCompleted).toEqual(true);
        });

        it('should add new todo', () => {
            const action = {
                type: ADD_TODO,
                payload: {
                    id: 'abc123',
                    text: 'Something to do',
                    completed: false,
                    createdAt: 985321
                }
            };
            const res = mainReducer(df({ todos: [] }), df(action));

            expect(res.todos.length).toEqual(1);
            expect(res.todos[0]).toEqual(action.payload);
        });

        it('should toggle completed value and update completedAt', () => {
            const testTodo = {
                completed: true,
                completedAt: 126,
                createdAt: 123,
                id: uuid(),
                text: 'Finish this test'
            };
            const action = {
                type: UPDATE_TODO,
                payload: {
                    id: testTodo.id,
                    updates: { completed: false, completedAt: null }
                }
            };
            const res = mainReducer(df({ todos: [testTodo] }), df(action));

            expect(res.todos[0].completed).toEqual(!testTodo.completed);
            expect(res.todos[0].completedAt).toEqual(undefined);
            expect(res.todos[0].text).toEqual(testTodo.text);
        });

        it('should add existing todos', () => {
            const todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            const action = {
                type: ADD_TODOS,
                payload: todos
            };
            const res = mainReducer(df({ todos: [] }), df(action));

            expect(res.todos.length).toEqual(1);
            expect(res.todos[0]).toEqual(todos[0]);
        });
    });

    describe('Auth Reducer', () => {
        it('should store user uid in state on LOGIN', () => {
            const action = {
                type: 'LOGIN',
                payload: 'abc123'
            };
            const res = authReducer(undefined, df(action));

            expect(res).toEqual({ uid: action.uid });
        });
        it('should clear user uid on LOGOUT ', () => {
            const authData = {
                uid: 'abc123'
            };
            const action = {
                type: 'LOGOUT'
            };
            const res = authReducer(df(authData), df(action));

            expect(res).toEqual({ uid: {} });
        });
    });
});
