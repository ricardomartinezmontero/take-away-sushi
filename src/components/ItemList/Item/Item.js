import React from 'react';

import classes from './Item.module.css';

import Badge from '../../../UI/Badge/Badge';

const item = (props) => {

    const badge = props.orderedItem ? <Badge text={props.orderedItem.amount} />: null

    return (
        <div className={classes.Item} onClick={() => props.itemClicked(props.name)}>
            <div className={classes.ImgContainer}>
                <img className={classes.Img} src={props.image} alt={props.name}/>
            </div>
            <div className={classes.ItemDetails}>
                <div className={classes.ItemTitle}>
                    <div>
                        <h2>{props.name}</h2>
                    </div>
                    <div className={classes.Separator}></div>
                    {badge}
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
                <div>
                    <span>{props.price}€</span>
                </div>
            </div>
        </div>
    );
};

export default item;