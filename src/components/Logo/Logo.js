import React from 'react';

import burgerLogo from '../../assets/images/logo.svg';
import classes from './Logo.module.css';

const logo = (props) => (
    <img className={classes.Img} src={burgerLogo} alt="TakeAway"/>
);

export default logo;