import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import expect from 'expect';

import * as actions from '../../actions';
import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    ADD_TODOS,
    TOGGLE_SHOW_COMPLETED,
    TOGGLE_TODO
} from '../../actions/types';

const createMockStore = configureMockStore([reduxThunk]);

describe('Actions', () => {
    it('should generate search text action', () => {
        const action = {
            type: SET_SEARCH_TEXT,
            payload: 'Some search text'
        };
        const res = actions.setSearchText(action.payload);

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        const action = {
            type: ADD_TODO,
            payload: {
                id: '123abc',
                text: 'Anything we like',
                completed: false,
                createdAt: 0
            }
        };

        const res = actions.addTodo(action.payload);

        expect(res).toEqual(action);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'My todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({ type: ADD_TODO });
            expect(actions[0].payload).toInclude({ text: todoText });
            done();
        }).catch(done);
    });

    it('should generate addTodos action object', () => {
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
        const res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });

    it('should generate showCompleted action', () => {
        const action = {
            type: TOGGLE_SHOW_COMPLETED,
        };
        const res = actions.toggleShowCompleted(action.payload);

        expect(res).toEqual(action);
    });

    it('should generate toggleTodo action', () => {
        const action = {
            type: TOGGLE_TODO,
            payload: 123
        };
        const res = actions.toggleTodo(action.payload);

        expect(res).toEqual(action);
    });
});
