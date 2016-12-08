const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

import { AddTodo } from '../../components/AddTodo';
import { ADD_TODO } from '../../actions/types';
import * as actions from '../../actions';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        const todoText = 'Check mail';
        const action = actions.startAddTodo(todoText);
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        const $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.input.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
    it('should not dispatch ADD_TODO when invalid todo text', () => {
        const todoText = '';
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        const $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.input.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
