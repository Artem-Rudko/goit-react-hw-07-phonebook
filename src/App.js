import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
// import actions from './redux/actions';
import { saveContact, delContact, filterContact } from './redux/actions';

import './styles.css';

export default function App() {
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
    });

    const [filter, setFilter] = useState(() => {
        return JSON.parse(window.localStorage.getItem('filter')) ?? '';
    });

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const dispatch = useDispatch();

    const addNewContact = data => {
        const normalizedData = data.name.toLowerCase();
        const dublicate = contacts.find(
            contact => contact.name.toLowerCase() === normalizedData,
        );

        const newContact = {
            ...data,
            id: uuidv4(),
        };

        dublicate
            ? alert(`${dublicate.name} is already in contacts`)
            : dispatch(saveContact(newContact));
        setContacts(contacts => [newContact, ...contacts]);
    };

    const changeFilter = e => {
        setFilter(e.currentTarget.value); // hooks is used
        dispatch(filterContact(e.currentTarget.value)); //redux is used
    };

    const deleteContact = contactId => {
        // console.log('delete was clicked');
        // console.log(contactId);
        setContacts(contacts =>
            contacts.filter(contact => contact.id !== contactId),
        );
        dispatch(delContact(contactId));
    };

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
        <div className="App">
            <h1 className="title">Phonebook</h1>
            <ContactForm onSubmit={addNewContact} />
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
                contacts={filteredContacts}
                onDeleteContact={deleteContact}
            />
        </div>
    );
}

App.defaultProps = {
    contacts: [],
};

App.propTypes = {
    contacts: PropTypes.array,
    data: PropTypes.shape({ name: PropTypes.string, number: PropTypes.number }),
};
