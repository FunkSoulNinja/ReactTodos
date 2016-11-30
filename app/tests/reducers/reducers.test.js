import expect from 'expect';
import df from 'deep-freeze-strict';

import {
    SET_SEARCH_TEXT,
    ADD_TODO,
    TOGGLE_SHOW_COMPLETED,
    TOGGLE_TODO
} from '../../actions/types';

import {
    mainReducer,
} from '../../reducers';

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            const action = {
                type: SET_SEARCH_TEXT,
                payload: 'dog'
            };
            const res = mainReducer(df(''), df(action));

            expect(res).toEqual(action.payload);
        });

        it('should flip the boolean value of showCompleted', () => {
            const action = {
                type: TOGGLE_SHOW_COMPLETED,
            };
            const res = mainReducer(df({ showCompleted: false }), df(action));

            expect(res).toEqual(true);
        });
    });
});
