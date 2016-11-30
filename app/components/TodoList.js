import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';

export class TodoList extends React.Component {
    renderTodos(todos) {
        if (todos.length === 0) {
            return <p className="container__message">Nothing to do</p>;
        }
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

const mapStateToProps = (state) => {
    const { todos } = state.app;

    return { todos };
};

export default connect(mapStateToProps)(TodoList);
