import React, { Component } from 'react';

import classes from './Order.module.css';

class Order extends Component {
    render () {
        return (
            <div className={classes.Order}>
                This is Order component
            </div>
        );
    }
}

export default Order;