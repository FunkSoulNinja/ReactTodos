import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {
    renderTodos(todos) {
        return todos.map(todo => {
            return <Todo key={todo.id} {...todo} />;
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
