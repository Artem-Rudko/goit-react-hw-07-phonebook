import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                    id={id}
                />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
