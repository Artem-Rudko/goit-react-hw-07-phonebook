import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={styles.label}>
            {' '}
            Find contacts by name
            <input
                className={styles.input}
                type="text"
                value={value}
                placeholder="enter name"
                onChange={onChange}
            ></input>
        </label>
    );
};

Filter.defaultProps = {
    value: '',
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
