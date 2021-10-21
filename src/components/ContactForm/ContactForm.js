import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default function ContactForm(props) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [id, setId] = useState('');

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({ name, number, id });
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
        setId('');
    };

    return (
        <form className={styles.inputForm} onSubmit={handleSubmit}>
            <label className={styles.label}>
                <span>Name</span>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={name}
                    placeholder="i.e. James Bond"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleInputChange}
                />
            </label>
            <label className={styles.label}>
                Number
                <input
                    className={styles.input}
                    type="tel"
                    name="number"
                    value={number}
                    placeholder="i.e. 007-00-00"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleInputChange}
                />
            </label>
            <button className={styles.submitBtn} type="submit">
                Add contact
            </button>
        </form>
    );
}

ContactForm.defaultProps = {
    value: '',
};

ContactForm.propTypes = {
    value: PropTypes.string,
};
