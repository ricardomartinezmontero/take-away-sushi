import React, { Component } from 'react';

import classes from './Home.module.css';

import ItemSelector from '../../components/ItemSelector/ItemSelector';

class Home extends Component {
    render () {
        return (
            <div className={classes.Home}>
                <ItemSelector 
                   item={
                       {
                           name: "item name",
                           description: "this is a bref description of the item",
                           price: 10,
                           amount: 1
                       }
                   } />
            </div>
        );
    }
}

export default Home;