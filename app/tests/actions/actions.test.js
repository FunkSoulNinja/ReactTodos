import expect from 'expect';
import {
    setSearchText,
    addTodo,
    toggleShowCompleted,
    toggleTodo
} from '../../actions/actions';
import {
    SET_SEARCH_TEXT,
    ADD_TODO,
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
