import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {
    toggleTodo
} from '../actions';

export class Todo extends React.Component {
    render() {
        const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
        const todoClassName = completed ? 'todo todo-completed' : 'todo';
        const renderDate = () => {
            let message = 'Created at ';
            let timestamp = createdAt;

            if (completed) {
                message = 'Completed at ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassName} onClick={() => dispatch(toggleTodo(id))} >
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
}



export default connect()(Todo);
