import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Menu.module.css";

import { fetchMenu } from '../../store/actions/menu';
import { updateOrder } from '../../store/actions/order';

import SectionList from "../../components/SectionList/SectionList";
import ModalWindow from "../../components/ItemSelector/ModalWindow/ModalWindow";
import OrderSummaryModal from "../../components/OrderSummary/OrderSummaryModal/OrderSummaryModal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import OrderSummaryButton from "../../components/OrderSummary/OrderSummaryButton/OrderSummaryButton";
import Spinner from "../../UI/Spinner/Spinner";

const Menu = props => {
  const dispatch = useDispatch();

  const loadingMenu = useSelector(state => state.menu.idle);
  const order = useSelector(state => state.order.order);
  const menu = useSelector(state => state.menu.menu);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemSelector, setShowItemSelector] = useState(false);
  const [showOrderSummaryModal, setShowOrderSummaryModal] = useState(false);

  useEffect(() => {
    if (menu && menu.length === 0) {
      dispatch(fetchMenu());
    }
  }, [menu, dispatch]);

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

  const countItemsInOrder = (order) => {
    return Object.keys(order).reduce(
      (acc, itemName) => acc + order[itemName].amount
    , 0);
  };

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
        />
      </div>
      <OrderSummaryModal
        toggleOrderSummary={toggleOrderSummaryHandler}
        display={showOrderSummaryModal}
        order={order}
        removeItem={orderUpdateHandler}
      />
      {modalItemSelector}
      {shoppingCartButtom}
    </div>
  );

  return loadingMenu ? <Spinner /> : componentContent;
};

export async function getStaticProps({ params }) {

  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const ref = db.ref("menu");
  const snapshot = await ref.get();
  const menu = snapshot.val();
  
  console.log(menu);

  dispatch(setMenu(menu));
  
  return {
    // Set the timeout for generating to 1 second
    // This timeout could be longer depending on how often data changes
    revalidate: 0,
    props: {initialReduxState: reduxStore.getState()}
  };
};

export default Menu;
