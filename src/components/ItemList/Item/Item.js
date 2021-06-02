import React from 'react';
import Image from 'next/image';

import classes from './Item.module.css';

import Badge from '../../../UI/Badge/Badge';

const item = (props) => {

    const badge = props.orderedItem ? <Badge className={classes.Badge} text={props.orderedItem.amount} />: null

    return (
        <div className={classes.Item} onClick={() => props.itemClicked(props.name)}>
            <h2 className={classes.ItemTitle}>{props.name}</h2>
            <div className={classes.ItemDetailsContainer}>
                <Image className={classes.ImgContainer} src="/prod1.jpg" alt={props.name} width={200} height={150} objectPosition="center center" objectFit="fill" />
                <div className={classes.ItemDetails}>
                    <p>{props.description}</p>
                    <span>{props.price}€</span>
                </div>
            </div>
            {badge}
        </div>
    );
};

export default item;