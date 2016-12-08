import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions';

export class AddTodo extends Component {
    onSubmit(e) {
        e.preventDefault();
        const todoText = this.refs.input.value;
        if (todoText.length > 0) {
            this.props.dispatch(actions.startAddTodo(todoText));
            this.refs.input.value = '';
        } else {
            this.refs.input.focus();
        }
    }
    render() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="input" placeholder="insert todo" />
                    <button className="button expanded">Add todo</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);
