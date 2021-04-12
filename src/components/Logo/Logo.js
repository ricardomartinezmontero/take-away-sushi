import React from 'react';

import burgerLogo from '../../assets/images/logo.svg';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="TakeAway"/>
    </div>
);

export default logo;