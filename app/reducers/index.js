import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    TOGGLE_SHOW_COMPLETED,
    TOGGLE_TODO
} from '../actions/types';

const INITIAL_STATE = {
    searchText: '',
    showCompleted: false
};

export const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return action.payload;
        case TOGGLE_SHOW_COMPLETED:
            return !state.showCompleted;
        default:
            return state;
    }
};
