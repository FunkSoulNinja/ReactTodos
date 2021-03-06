import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from 'TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import * as actions from '../actions';

export class TodoApp extends Component {
    onLogout(e) {
        e.preventDefault();

        this.props.dispatch(actions.startLogout());
    }
    render() {
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout.bind(this)}>Log out</a>
                </div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>"
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     const user_image = state.auth.user.photoURL;
//
//     return { user_image };
// };

export default connect()(TodoApp);
