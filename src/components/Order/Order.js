import { useState } from "react";
import { useSelector } from "react-redux";

import classes from './Order.module.css';

import OptionButtonBar from "../../UI/OptionButtonBar/OptionButtonBar";
import OrderItemList from "./OrderItemList/OrderItemList";

const Order = () => {

    const deliveryOption = {
        id: "delivery",
        name: "A domicilio"
    }

    const pickupOption = {
        id: "pickup",
        name: "Para recoger"
    }

    const collectionOptions = {"delivery": deliveryOption, "pickup": pickupOption}

    const[selectedOption, setSelectedOption] = useState(pickupOption);

    const order = useSelector(state => state.order.order);

    const onOptionSelectedHandler = (optionId) => {
        setSelectedOption(collectionOptions[optionId]);
    };

    return (
        <div className={classes.Order}>
            <section className={classes.OrderSection}>
                <header>Para llevar o recoger</header>
                <OptionButtonBar 
                    options={collectionOptions} 
                    selected={selectedOption}
                    onOptionSelected={onOptionSelectedHandler} />
            </section>
            <section className={classes.OrderSection}>
                <header>Tu lista del pedido</header>
                <OrderItemList order={order} />
            </section>
        </div>
    );
};

export default Order;