import expect from 'expect';
import df from 'deep-freeze-strict';
import uuid from 'node-uuid';
import moment from 'moment';

import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    ADD_TODOS,
    TOGGLE_SHOW_COMPLETED,
    TOGGLE_TODO
} from '../../actions/types';

import {
    mainReducer,
} from '../../reducers/index';

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
                payload: 'walk the dog'
            };
            const res = mainReducer(df({ todos: [] }), df(action));

            expect(res.todos.length).toEqual(1);
            expect(res.todos[0].text).toEqual(action.payload);
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
                type: TOGGLE_TODO,
                payload: testTodo.id
            };
            const res = mainReducer(df({ todos: [testTodo] }), df(action));

            expect(res.todos[0].completed).toEqual(!testTodo.completed);
            expect(res.todos[0].completedAt).toEqual(undefined);
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
});
