import React from 'react';

import classes from './OrderSummary.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import Badge from '../../UI/Badge/Badge';

const orderSummary = (props) => {

    const orderList = Object.keys(props.order).map(key => {
        const item = props.order[key];
        return (
            <div 
                key={key} 
                className={classes.OrderList}>
                <div className={classes.Item}>
                    <Badge text={item.amount} borderShape="square" /> {item.name}
                </div>
                <div className={classes.Price}>
                    <FontAwesomeIcon 
                        icon={faMinusCircle} 
                        onClick={() => props.removeItem(item.name, item.amount - 1)} />
                    <span>{(item.amount * item.price).toFixed(2)}€</span>
                </div>
            </div>
        );
    });

    const totalPrice = (order) => {
        return Object.keys(props.order).reduce((acc, key) => acc + (props.order[key].price * props.order[key].amount), 0);
    };

    const isEmptyOrder = Object.keys(props.order).length === 0;

    return (
        <div className={classes.OrderSummary}>
            <h2 className={classes.Title}>Mi Pedido</h2>
            {orderList}
            <div className={classes.Total}>
                <div className={classes.TotalTittle}>Total</div>
                <div className={classes.TotalPrice}>
                    {totalPrice(props.order).toFixed(2)}€
                </div>
            </div>
            <div className={classes.PayContiner} >
                <button className={classes.Pay} disabled={isEmptyOrder ? true : false}>
                    <span>Realizar Pedido</span>
                </button>
            </div>
        </div>
    );
};

export default orderSummary;