import styles from './LogoutButton.module.css';

const LogoutButton = props => {
    return (
            <li className={styles.LogoutButton} >
                <button type="button" onClick={props.onClick}>{props.children}</button>
            </li>
    );
};

export default LogoutButton;