const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

import Todo from 'Todo';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle with id on click', () => {
        const todoData = {
            id: 19,
            text: 'Write todo.test.js test',
            completed: true
        };
        const spy = expect.createSpy();
        const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
        const $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(todoData.id);
    });
});
