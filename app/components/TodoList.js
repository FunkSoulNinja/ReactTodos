import React from 'react';
import { connect } from 'react-redux';

import TodoAPI from 'TodoAPI';
import Todo from 'Todo';

export class TodoList extends React.Component {
    render() {
        const { todos, showCompleted, searchText } = this.props;
        const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        const renderTodos = () => {
            if (filteredTodos.length === 0) {
                return <p className="container__message">Nothing to do</p>;
            }
            return filteredTodos.map(todo => {
                return <Todo key={todo.id} {...todo} />;
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.app;
};

export default connect(mapStateToProps)(TodoList);
