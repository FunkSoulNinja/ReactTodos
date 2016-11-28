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
                {
                    id: uuid(),
                    text: "Walk the dog",
                    completed: false
                 }, {
                    id: uuid(),
                    text: "Clean the yard",
                    completed: true
                 }, {
                    id: uuid(),
                    text: "Finish Todo App",
                    completed: true
                 }, {
                    id: uuid(),
                    text: "Get good",
                    completed: false
                 }
            ]
        };
    }
    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text,
                    completed: false
                  }
            ]
        });
    }
    handleToggle(id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo
        });

        this.setState({ todos: updatedTodos });
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
                <TodoList todos={this.state.todos} onToggle={this.handleToggle.bind(this)}/>
                <AddTodo handleAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;
