import React from 'react';

class Todo extends React.Component {
    render() {
        const { id, text } = this.props;
        return (
            <div>
                <p>{id}: {text}</p>
            </div>
        );
    }
}

export default Todo;
