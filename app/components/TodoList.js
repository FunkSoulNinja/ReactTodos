import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {
    renderTodos(todos) {
        if (todos.length === 0) {
            return <p className="container__message">Nothing to do</p>;
        }
        return todos.map(todo => {
            return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />;
        });
    }
    render() {
        const { todos } = this.props;
        return (
            <div>
                {this.renderTodos(todos)}
            </div>
        );
    }
}

export default TodoList;
