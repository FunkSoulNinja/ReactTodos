const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        const todoText = 'test text';
        const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: [] });
        todoApp.handleAddTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should handle completed value when handleToggle is called', () => {
        const todoData = {
            id: 11,
            text: 'Test features',
            completed: false
        };
        const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [todoData] });

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(todoData.id);
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});
