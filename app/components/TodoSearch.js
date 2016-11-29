import React, { Component } from 'react';

class TodoSearch extends Component {
    handleSearch() {
        const showCompleted = this.refs.showCompleted.checked;
        const searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    }
    render() {
        return (
            <div className="container__header">
                <div>
                    <input onChange={this.handleSearch.bind(this)} type="search" ref="searchText" placeholder="Search todos" />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)} />
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

export default TodoSearch;
