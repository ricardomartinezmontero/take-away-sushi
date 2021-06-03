import React from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
import LogoutButton from './LogoutButton/LogoutButton';
import { useSelector } from 'react-redux';

const navigationItems = (props) => {

    const isUserAuthenticated = useSelector(state => state.auth.isLoggedIn);

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem to="/menu">Menu</NavigationItem>
            {!isUserAuthenticated && <NavigationItem to="/login">Inicia Sesion</NavigationItem>}
            {isUserAuthenticated && <NavigationItem to="/my-orders">Mis Pedidos</NavigationItem>}
            {isUserAuthenticated && <LogoutButton onClick={props.onLogout}>Cerrar Sesion</LogoutButton>}
        </ul>
    );
};

export default navigationItems;