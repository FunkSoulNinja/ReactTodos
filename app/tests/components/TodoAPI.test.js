import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            const todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            const actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            const badTodos = { a: 'b' };
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });
    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
            const actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localStorage', () => {
            const todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            const actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });
});
