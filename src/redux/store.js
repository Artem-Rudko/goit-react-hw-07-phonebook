import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducer';

// {
//         contacts: {
//             items: [],
//             filter: '',
//         },
//     },

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    // devTools: process.env.NODE_ENV === 'development',
});
