import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { saveContact, delContact, filterContact } from './actions';

// import actions from './actions';

// import { SAVE_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './action-types';

// const INITIAL_STATE = {
//     contacts: {
//         items: [],
//         filter: '',
//     },
// };

const items = createReducer([], {
    [saveContact]: (state, action) => [...state, action.payload],
    [delContact]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
    [filterContact]: (_, action) => action.payload,
});

export default combineReducers({
    items,
    filter,
});
