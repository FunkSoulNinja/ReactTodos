import React, { Component } from 'react';
import uuid from 'node-uuid'

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
                { id: uuid(), text: "Walk the dog" },
                { id: uuid(), text: "Clean the yard" },
                { id: uuid(), text: "Finish Todo App" },
                { id: uuid(), text: "Get good" },
            ]
        };
    }
    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                { id: uuid(), text }
            ]
        });
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
