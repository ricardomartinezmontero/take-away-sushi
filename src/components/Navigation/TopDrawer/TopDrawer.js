import React from 'react';

import classes from './TopDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const topDrawer = (props) => {
    
    let attachedClasses = [classes.TopDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.TopDrawer, classes.Open];
    }

    return (
        <React.Fragment>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav>
                    <NavigationItems />
                </nav>
                <div className={classes.Footer}></div>
            </div>
        </React.Fragment>
    );
};

export default topDrawer;