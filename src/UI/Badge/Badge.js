import React from 'react';

import classes from './Badge.module.css';

const badge = (props) => {

    const styles = [classes.Badge, props.className ? props.className : '']

    return (
        <div className={styles.join(' ')}>
            <span 
                className={props.borderShape === "square" ? classes.Badge__square : classes.Badge__circle}>
                {props.text}
            </span>
        </div>
    );
};

export default badge;