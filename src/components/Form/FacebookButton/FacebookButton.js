import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FacebookButton.module.css';

const FacebookLogin = (props) => {
    return (
        <button className={styles.FacebookButton} onClick={props.onClick}>
            <FontAwesomeIcon className={styles.FacebookLogo} icon={['fab','facebook-square']} size="2x"/>
            <span>Continuar con Facebook</span>
        </button>
    );
};

export default FacebookLogin;