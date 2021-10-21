import { createAction } from '@reduxjs/toolkit';
// import { SAVE_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './action-types';

export const saveContact = createAction('contacts/save');

// export function saveContact({ id, name, number }) {
//     return {
//         type: SAVE_CONTACT,
//         payload: { id, name, number },
//     };
// }

export const delContact = createAction('contacts/delete');

// export function delContact(id) {
//     return {
//         type: DELETE_CONTACT,
//         payload: id,
//     };
// }

export const filterContact = createAction('contacts/filter');

// export function filterContact(text) {
//     return {
//         type: FILTER_CONTACT,
//         payload: text,
//     };
// }

// export default { saveContact, delContact, filterContact };
