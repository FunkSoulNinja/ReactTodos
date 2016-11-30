const React = require('react');
const ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

import { configure } from '../../store/configureStore';
import TodoApp from 'TodoApp';
import TodoList from 'TodoList';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should render TodoList', () => {
        const store = configure();
        const provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp />
            </Provider>
        );

        const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        const todoList = TestUtils.scryRenderedComponentsWithType(provider, TodoList);

        expect(todoList.length).toEqual(1);
    });
});
