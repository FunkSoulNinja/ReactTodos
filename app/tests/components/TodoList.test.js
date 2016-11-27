const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        const todos = [{
            id: 1,
            text: "Do something"
        }, {
            id: 2,
            text: "Check mail"
        }];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).toBe(todos.length);
    });
});
