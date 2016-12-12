import {
    LOGIN,
    LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
    uid: {}
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { uid: action.payload.uid };
        case LOGOUT:
            return INITIAL_STATE;

        default:
            return state;
    }
};
