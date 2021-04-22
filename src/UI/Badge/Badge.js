import React from 'react';

import classes from './Badge.module.css';

const badge = (props) => {

    const styles = [classes.Badge, props.borderShape === "square" ? classes.Badge__square : classes.Badge__circle]

    return (
        <div className={styles.join(' ')}>
            <span>{props.text}</span>
        </div>
    );
};

export default badge;