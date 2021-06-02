import classes from './OrderItemList.module.css';

const OrderItemList = ({ order }) => {

    const totalPrice = Object.keys(order).reduce((total, key) => {
        const item = order[key];
        return total + item.amount * item.price;
    }, 0);

    const itemsToOrder = Object.keys(order).map(key => {
        const item = order[key];
        return (
            <li key={key} className={classes.ListElement}>
                <span className={classes.ItemName}>{item.name}</span>
                <span className={classes.ItemOrderDetails}>{item.amount}x{item.price}</span>
                <span className={classes.ItemOrderTotal}>{(item.amount * item.price).toFixed(2)}</span>
            </li>
        );
    });

    return (
        <ul className={classes.OrderItemList}>
            {itemsToOrder}
            <li className={classes.OrderTotalPrice}>
                <span className={classes.OrderTotalPriceText}>Total</span>
                <span className={classes.OrderTotalPriceAmount}>{totalPrice.toFixed(2)}</span>
            </li>
        </ul>
    );
};

export default OrderItemList;