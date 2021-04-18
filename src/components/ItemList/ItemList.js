import React, { Component } from 'react';

import classes from './ItemList.module.css';

import Item from './Item/Item';

const itemList = (props) => {
        const listElements = props.items.map(x => 
            <Item 
                key={x.name}
                image={x.image}
                name={x.name} 
                description={x.description} 
                price={x.price} 
                itemClicked={props.itemClicked} 
                orderedItem={props.orderedItems[x.name]} />
        );

        const itemContainerClasses = [
            classes.ItemList, 
            props.collapsed ? classes.Collapsed : classes.Open
        ];

        return (
            <div className={itemContainerClasses.join(' ')}>
                {listElements}
            </div>
        );
};

export default itemList;