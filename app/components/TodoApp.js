import React, { Component } from 'react';

import TodoList from 'TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            showCompleted: false,
            searchText: '',
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
    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
    render() {
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch.bind(this)} />
                <TodoList todos={this.state.todos} />
                <AddTodo handleAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;
