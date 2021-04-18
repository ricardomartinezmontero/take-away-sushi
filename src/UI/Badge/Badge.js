import React from 'react';

import classes from './Badge.module.css';

const badge = (props) => {
    return (
        <div className={classes.Badge}>
            <span>{props.text}</span>
        </div>
    );
};

export default badge;