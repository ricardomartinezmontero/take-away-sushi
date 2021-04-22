import React, { Component } from 'react';

import classes from './ItemSelector.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import item from '../ItemList/Item/Item';

class ItemSelector extends Component {

    state = {
        item: {
            ...this.props.item
        },
        totalPrice: this.props.item.price * this.props.item.amount
    }

    alterItemAmount = (amount) => {
        const updatedAmount = this.state.item.amount + amount;
        const updatedItem = {
            ...this.state.item,
            amount: (updatedAmount < 0) ? 0 : (this.state.item.amount + amount)
        };
        this.setState( prev => (
            {
                ...prev,
                item: updatedItem,
                totalPrice: (updatedItem.amount * updatedItem.price).toFixed(2)
            }
        ));
    }

    render () {

        const isDisabledMinus = this.state.item.amount === 0;
        const minusButtonStyles = isDisabledMinus ? [classes.AmountButton,  classes.AmountButtonDisabled] : [classes.AmountButton];

        return (
            <div className={classes.ItemSelector}>
                <div className={classes.ItemName}>
                    <h1>{this.state.item.name}</h1>
                </div>
                <p className={classes.ItemPrice}>
                    {this.state.item.price} €
                </p>
                <p className={classes.ItemDescription}>
                    {this.state.item.description}
                </p>
                <div className={classes.AmountSelectorContainer}>
                    <div className={classes.AmountSelector}>
                        <div disabled
                            className={minusButtonStyles.join(' ')}
                            onClick={(event) => this.alterItemAmount(-1)}>
                            <span><FontAwesomeIcon icon={faMinus} /></span>
                        </div>
                        <div className={classes.AmountCounter}>
                            {this.state.item.amount}
                        </div>
                        <div
                            className={classes.AmountButton} 
                            onClick={(event) => this.alterItemAmount(1)}>
                            <span><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                    </div>
                </div>
                <div className={classes.Button} onClick={() => this.props.orderUpdate(this.state.item.name, this.state.item.amount)}>
                    <div className={classes.ButtonTitle}>Actualizar pedido</div>
                    <div className={classes.ButtonPriceInfo}>{this.state.totalPrice}€</div>
                </div>
            </div>
        );
    }
    
}

export default ItemSelector;