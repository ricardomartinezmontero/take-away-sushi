import React, { Component } from 'react';

import classes from './ItemSelector.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

class ItemSelector extends Component {

    state = {
        item: {
            name: "",
            price: null,
            amount: null
        },
        totalPrice: 0
    }

    componentDidMount () {
        this.setState({
            item: this.props.item,
            totalPrice: this.props.item.price * this.props.item.amount
        });
    }

    alterItemAmount = (event, amount) => {
        event.preventDefault();
        console.log(this.state.item, amount);
        const updatedItem = {
            ...this.state.item,
            amount: (this.state.item.amount + amount)
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
                        <div 
                            className={classes.AmountButton}
                            onClick={(event) => this.alterItemAmount(event, -1)}>
                            <span><FontAwesomeIcon icon={faMinus} /></span>
                        </div>
                        <div className={classes.AmountCounter}>
                            {this.state.item.amount}
                        </div>
                        <div
                            className={classes.AmountButton} 
                            onClick={(event) => this.alterItemAmount(event, 1)}>
                            <span><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                    </div>
                </div>
                <div className={classes.Button}>
                    <div className={classes.ButtonTitle}>Actualizar pedido</div>
                    <div className={classes.ButtonPriceInfo}>{this.state.totalPrice}€</div>
                </div>
            </div>
        );
    }
    
}

export default ItemSelector;