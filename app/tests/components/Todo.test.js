const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

import { Todo } from 'Todo';
import * as actionGens from '../../actions';
import { UPDATE_TODO } from '../../actions/types';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should dispatch UPDATE_TODO action on click', () => {
        const todoData = {
            id: 19,
            text: 'Write todo.test.js test',
            completed: true
        };
        const action = actionGens.startToggleTodo(todoData.id, !todoData.completed);

        const spy = expect.createSpy();
        const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
        const $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });
});
