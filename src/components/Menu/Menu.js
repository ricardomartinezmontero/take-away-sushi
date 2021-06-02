import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Menu.module.css";

import { countItemsInOrder, preventBodyScroll } from "../../utils/shared";

import { setMenu } from "../../store/menu";
import { updateOrder } from "../../store/actions/order";

import SectionList from "../SectionList/SectionList";
import ModalWindow from "../ItemSelector/ModalWindow/ModalWindow";
import OrderSummaryModal from "../OrderSummary/OrderSummaryModal/OrderSummaryModal";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderSummaryButton from "../OrderSummary/OrderSummaryButton/OrderSummaryButton";
import Spinner from "../../UI/Spinner/Spinner";
import { useRouter } from "next/router";

const isExecutingInBrowser = typeof window !== "undefined";

const overlay = isExecutingInBrowser && document.getElementById("overlay");

const Menu = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { menu: preloadedMenu } = props;

    const loadingMenu = useSelector((state) => state.menu.idle);
    const order = useSelector((state) => state.order.order);
    const menu = useSelector((state) => state.menu.menu);

    const [selectedItem, setSelectedItem] = useState(null);
    const [showItemSelector, setShowItemSelector] = useState(false);
    const [showOrderSummaryModal, setShowOrderSummaryModal] = useState(false);

    useEffect(() => {
        dispatch(setMenu(preloadedMenu));
    }, [dispatch, preloadedMenu]);

    useEffect(() => {
        preventBodyScroll(showItemSelector || showOrderSummaryModal);
    }, [showItemSelector, showOrderSummaryModal]);

    const findItemInMenu = (menu, itemName) =>
        menu
            .reduce((acc, section) => acc.concat(section.items), [])
            .find((x) => x.name === itemName);

    const itemClickHandler = (itemName) => {
        const itemOrdered = order[itemName];
        const itemOrderToUpdate = itemOrdered
            ? { ...itemOrdered }
            : {
                  ...findItemInMenu(menu, itemName),
                  amount: 0,
              };

        setSelectedItem(itemOrderToUpdate);
        setShowItemSelector(true);
    };

    const itemSelectorCloseHandler = () => {
        setSelectedItem(null);
        setShowItemSelector(false);
    };

    const toggleOrderSummaryHandler = () => {
        setShowOrderSummaryModal((prevShow) => !prevShow);
    };

    const orderUpdateHandler = (itemId, amount) => {
        const item = findItemInMenu(menu, itemId);
        dispatch(updateOrder(item, amount));
        itemSelectorCloseHandler();
    };

    const onProcessOrderHandler = () => {
        router.push('order');
    }

    const numberOfItemsOrdered = countItemsInOrder(order);

    const shoppingCartButtom =
        numberOfItemsOrdered > 0 ? (
            <div className={classes.OrderSummaryButton}>
                <OrderSummaryButton
                    text={numberOfItemsOrdered}
                    toggleOrderSummary={toggleOrderSummaryHandler}
                />
            </div>
        ) : null;

    const modalItemSelector = showItemSelector ? (
        <ModalWindow
            item={selectedItem}
            orderUpdate={orderUpdateHandler}
            closeClick={itemSelectorCloseHandler}
        />
    ) : null;

    const componentContent = (
        <div className={classes.Menu}>
            <div className={classes.MenuItems}>
                <SectionList
                    sections={menu}
                    orderedItems={order}
                    itemClicked={itemClickHandler}
                />
            </div>
            <div className={classes.OrderSummary}>
                <OrderSummary 
                    order={order} 
                    removeItem={orderUpdateHandler} 
                    onProcessOrder={onProcessOrderHandler} />
            </div>
            <OrderSummaryModal
                toggleOrderSummary={toggleOrderSummaryHandler}
                display={showOrderSummaryModal}
                order={order}
                removeItem={orderUpdateHandler}
                onProcessOrder={onProcessOrderHandler} />
            {overlay && ReactDom.createPortal(modalItemSelector, overlay)}
            {shoppingCartButtom}
        </div>
    );

    return loadingMenu ? <Spinner /> : componentContent;
};

export default Menu;
