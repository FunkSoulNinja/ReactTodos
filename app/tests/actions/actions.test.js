import expect from 'expect';
import {
    setSearchText,
    addTodo,
    addTodos,
    toggleShowCompleted,
    toggleTodo
} from '../../actions';
import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    ADD_TODOS,
    TOGGLE_SHOW_COMPLETED,
    TOGGLE_TODO
} from '../../actions/types';


describe('Actions', () => {
    it('should generate search text action', () => {
        const action = {
            type: SET_SEARCH_TEXT,
            payload: 'Some search text'
        };
        const res = setSearchText(action.payload);

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        const action = {
            type: ADD_TODO,
            payload: 'Thing to do'
        };
        const res = addTodo(action.payload);

        expect(res).toEqual(action);
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
        const res = addTodos(todos);

        expect(res).toEqual(action);
    });

    it('should generate showCompleted action', () => {
        const action = {
            type: TOGGLE_SHOW_COMPLETED,
        };
        const res = toggleShowCompleted(action.payload);

        expect(res).toEqual(action);
    });

    it('should generate toggleTodo action', () => {
        const action = {
            type: TOGGLE_TODO,
            payload: 123
        };
        const res = toggleTodo(action.payload);

        expect(res).toEqual(action);
    });
});
