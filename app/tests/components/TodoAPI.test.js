import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('filterTodos', () => {
        const todos = [{
            id: 1,
            text: 'Some text',
            completed: true
        }, {
            id: 2,
            text: 'more text',
            completed: false,
        }, {
            id: 3,
            text: 'even more text',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(todos.length);
        });

        it('should return some (1), but not all (3) items if showCompleted is false', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(1);
        });

        it('should return all todos if searchText is empty', () => {
            const filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(todos.length);
        });
    });
});
