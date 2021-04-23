import React from 'react';

import classes from './Item.module.css';

import Badge from '../../../UI/Badge/Badge';

const item = (props) => {

    const badge = props.orderedItem ? <Badge className={classes.Badge} text={props.orderedItem.amount} />: null

    const itemDescription = props.description && props.description.trim().length > 0 ? <p>{props.description}</p> : null;

    return (
        <div className={classes.Item} onClick={() => props.itemClicked(props.name)}>
            <h2 className={classes.ItemTitle}>{props.name}</h2>
            <div className={classes.ItemDetailsContainer}>
                <div className={classes.ImgContainer}>
                    <img className={classes.Img} src={props.image} alt={props.name}/>
                </div>
                <div className={classes.ItemDetails}>
                    {itemDescription}
                    <span>{props.price}€</span>
                </div>
            </div>
            {badge}
        </div>
    );
};

export default item;