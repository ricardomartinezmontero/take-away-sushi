import React from 'react';

import classes from './OrderSummaryModal.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OrderSummary from '../OrderSummary';

const orderSummaryModal = (props) => {

    const styles = [classes.OrderSummaryModal, props.display ? classes.Open : classes.Close].join(' ');

    return (
        <div className={styles}>
            <span 
                className={classes.CloseButton}
                onClick={props.toggleOrderSummary} >
                <FontAwesomeIcon icon={['fa','angle-down']} />
            </span>
            <OrderSummary 
                className={classes.OrderSummaryContainer}
                order={props.order} 
                removeItem={props.removeItem} />
        </div>
    );
};

export default orderSummaryModal;