import { useSelector } from 'react-redux';
// import OrderSummary from '../../components/OrderSummary/OrderSummary';

const Order = () => {

    const order = useSelector(state => state.order.order);

    return (
        <div>
            {/* <OrderSummary order={order} /> */}
        </div>
    );
};

export default Order;