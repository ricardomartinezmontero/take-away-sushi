import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => {
    let drawerToggleClasses = [ 
        classes.DrawerToggle,
        props.open ? classes.DrawerToggleOpen : classes.DrawerToggleClose ];
    return (
        <div className={drawerToggleClasses.join(' ')} onClick={props.clicked}>
            <div className={classes.top}></div>
            <div className={classes.middle}></div>
            <div className={classes.bottom}></div>
        </div>
    );
};

export default drawerToggle;