import React from 'react';

import classes from './SideDrawer.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {
    
    let attachedClasses = [classes.TopDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.TopDrawer, classes.Open];
    }

    return (
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <nav>
                <NavigationItems />
            </nav>
            <div className={classes.Footer}></div>
        </div>
    );
};

export default SideDrawer;