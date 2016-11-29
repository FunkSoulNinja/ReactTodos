import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from 'TodoAPI';

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                ...TodoAPI.getTodos()
            ]
        };
    }

    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    }

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                  }
            ]
        });
    }
    handleToggle(id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }
            return todo;
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
        const { todos, showCompleted, searchText } = this.state;
        const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch.bind(this)} />
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)} />
                            <AddTodo handleAddTodo={this.handleAddTodo.bind(this)} />
                        </div>
                    </div>"
                </div>
            </div>
        );
    }
}

export default TodoApp;
