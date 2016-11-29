import React from 'react';

import moment from 'moment';

class Todo extends React.Component {
    render() {
        const { id, text, completed, createdAt, completedAt } = this.props;
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
            <div onClick={() => this.props.onToggle(id)} >
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
}

export default Todo;
