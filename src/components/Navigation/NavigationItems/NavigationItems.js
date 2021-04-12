import React from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/home">Home</NavigationItem>
        <NavigationItem link="/menu">Menu</NavigationItem>
        <NavigationItem link="/order">Pedido</NavigationItem>
        <NavigationItem link="/contact">Contacto</NavigationItem>
        <NavigationItem link="/authenticate">Iniciar Sesion</NavigationItem>
    </ul>
);

export default navigationItems;