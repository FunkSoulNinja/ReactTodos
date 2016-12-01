import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    setSearchText,
    toggleShowCompleted
} from '../actions';

export class TodoSearch extends Component {
    render() {
        const { dispatch, showCompleted, searchText } = this.props;
        return (
            <div className="container__header">
                <div>
                    <input
                        onChange={() => {
                            const searchTextInput = this.refs.searchText.value;
                            dispatch(setSearchText(searchTextInput));
                        }}
                        type="search"
                        ref="searchText"
                        value={searchText}
                        placeholder="Search todos"
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            ref="showCompleted"
                            checked={showCompleted}
                            onChange={() => dispatch(toggleShowCompleted())}
                        />
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { showCompleted, searchText } = state.app;

    return { showCompleted, searchText };
};

export default connect(mapStateToProps)(TodoSearch);
