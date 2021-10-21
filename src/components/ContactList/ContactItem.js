import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
            </button>
        </li>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
