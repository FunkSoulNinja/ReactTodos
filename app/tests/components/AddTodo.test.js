const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

import AddTodo from '../../components/AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo prop with valid data', () => {
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy} />);
        const $el = $(ReactDOM.findDOMNode(addTodo));
        const todoText = 'Check mail';

        addTodo.refs.input.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });
});
