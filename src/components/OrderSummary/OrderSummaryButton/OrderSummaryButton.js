import React from 'react';

import classes from './OrderSummaryButton.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Badge from '../../../UI/Badge/Badge';

const orderSummaryButton = (props) => {
    return (
        <button 
            className={classes.OrderSummaryButton}
            onClick={props.toggleOrderSummary} >
            <div className={classes.ShoppingCart}>
                <FontAwesomeIcon icon={['fa','shopping-basket']} />
            </div>
            <Badge text={props.text} className={classes.Badge}/>
            <span>Mi Pedido</span>
        </button>
    );
};

export default orderSummaryButton;