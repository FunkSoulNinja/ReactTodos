import React from 'react';

import TodoList from 'TodoList';

class TodoApp extends React.Component {
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
    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoApp;
