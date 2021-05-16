import React from 'react';

import { useSelector } from 'react-redux';

import OrderSummary from '../../components/OrderSummary/OrderSummary';

const Order = props => {
    
    const order = useSelector(state => state.order.order);

    return (
        <OrderSummary 
            order={order} 
            removeItem={() => {}} />
    );
}

export default Order;