import styles from "./TextInput.module.css";

const TextInput = (props) => {
    const { name, label, type, placeholder, value, onChange, onBlur, hasError } = props;
    const inputStyles = `${styles.Input} ${hasError ? styles.Error : ''}`;
    const errorMessageStyles = `${styles.ErrorMessage} ${!hasError && styles.ErrorMessageHidden}`;
    return (
        <label className={inputStyles} htmlFor={name}>
            <span>{label}</span>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {hasError && <p className={styles.ErrorMessage}>{props.errorMessage}</p>}
        </label>
    );
};

export default TextInput;
