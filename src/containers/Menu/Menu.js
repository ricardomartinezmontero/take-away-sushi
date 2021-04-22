import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from './Menu.module.css';

import SectionList from '../../components/SectionList/SectionList';
import ModalWindow from '../../components/ItemSelector/ModalWindow/ModalWindow';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../UI/Spinner/Spinner';

class Menu extends Component {

    state = {
        selectedItem: null,
        showItemSelector: false
    }

    componentDidMount () {
        console.log('[Menu.js] Loading menu ...');
        this.props.onFetchMenu();
    }

    findItemInMenu = (menu, itemName) => menu.reduce((acc, section) => acc.concat(section.items), []).find(x => x.name === itemName)

    itemClickHandler = (itemName) => {
        const itemOrdered = this.props.order[itemName];
        const itemOrderToUpdate = itemOrdered ? 
            {...itemOrdered} :
            {
                ...this.findItemInMenu(this.props.menu, itemName),
                amount: 0
            };
    
        this.setState({
            selectedItem: itemOrderToUpdate,
            showItemSelector: true
        });
    }

    itemSelectorCloseHandler = () => {
        this.setState({
            selectedItem: null,
            showItemSelector: false
        });
    }

    orderUpdateHandler = (itemId, amount) => {    
        const item = this.findItemInMenu(this.props.menu, itemId);
        this.props.onUpdateOrder(item, amount);
        this.itemSelectorCloseHandler();
    }

    render () {

        console.log('[Menu]', this.props.order);

        const modalItemSelector = this.state.showItemSelector ? 
            <ModalWindow 
                item={this.state.selectedItem} 
                orderUpdate={this.orderUpdateHandler} 
                closeClick={this.itemSelectorCloseHandler} /> : null;

        const componentContent = (
            <div className={classes.Menu}>
                <div className={classes.MenuItems}>
                    <SectionList 
                        sections={this.props.menu} 
                        orderedItems={this.props.order}
                        itemClicked={this.itemClickHandler} />
                </div>
                <div className={classes.OrderSummary}>
                    <OrderSummary 
                        order={this.props.order} 
                        removeItem={this.orderUpdateHandler} />
                </div>
                {modalItemSelector}
            </div>
        );

        return this.props.loadingMenu ? <Spinner /> : componentContent;
    }
}

const mapStateToProps = state => {
    return {
        loadingMenu: state.menu.idle,
        menu: state.menu.menu,
        order: state.order.order
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMenu: () => dispatch(actions.fetchMenu()),
        onUpdateOrder: (item, amount) => dispatch(actions.updateOrder(item, amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);