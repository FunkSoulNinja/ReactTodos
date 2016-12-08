import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import expect from 'expect';

import firebase, { firebaseRef } from 'app/firebase';
import * as actions from '../../actions';
import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    ADD_TODOS,
    TOGGLE_SHOW_COMPLETED,
    UPDATE_TODO
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
            const storeActions = store.getActions();
            expect(storeActions[0]).toInclude({ type: ADD_TODO });
            expect(storeActions[0].payload).toInclude({ text: todoText });
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
            type: UPDATE_TODO,
            payload: {
                id: '123',
                updates: { completed: false }
            }
        };
        const res = actions.updateTodo(action.payload.id, action.payload.updates);

        expect(res).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        let testTodoRef;

        beforeEach((done) => {
            testTodoRef = firebaseRef.child('todos').push();

            testTodoRef.set({
                text: 'This is a test',
                completed: false,
                createdAt: 6543456
            }).then(() => done());
        });

        afterEach((done) => testTodoRef.remove().then(() => done()));

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: UPDATE_TODO,
                    payload: {
                        id: testTodoRef.key
                    }
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();
                done();
            }, done());
        });
    });
});
