import React, { Component } from 'react';

import TodoList from 'TodoList';
import AddTodo from './AddTodo';

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { id: 1, text: "Walk the dog" },
                { id: 2, text: "Clean the yard" },
                { id: 3, text: "Finish Todo App" },
                { id: 4, text: "Get good" },
            ]
        };
    }
    handleAddTodo(text) {
        alert('new todo: ' + text);
    }
    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} />
                <AddTodo handleAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;
