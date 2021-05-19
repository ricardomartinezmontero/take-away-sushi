import logoImage from '../../../public/images/logo.svg';
import classes from './Logo.module.css';

const logo = (props) => {
    return (<img className={classes.Img} src={logoImage} alt="TakeAway"/>);
};

export default logo;