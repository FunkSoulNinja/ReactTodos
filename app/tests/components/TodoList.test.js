const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');
import { Provider } from 'react-redux';
import { configure } from '../../store/configureStore'

import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        const todos = [{
            id: 1,
            text: "Do something",
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }, {
            id: 2,
            text: "Check mail",
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }];
        const store = configure({
            app: {
                todos
            }
        });
        const provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider>
        );
        const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todoComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        const todos = [];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        const $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);
    });
});
