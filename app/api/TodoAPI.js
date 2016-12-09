import $ from 'jquery';

module.exports = {
    filterTodos: function (todos, showCompleted, searchText) {
        let filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        // Filter by searchText
        filteredTodos = filteredTodos.filter(todo => {
            return todo.text.toLowerCase().includes(searchText) || !searchText;
        });
        // Sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            }
            return 0;
        });
        return filteredTodos;
    }
};
