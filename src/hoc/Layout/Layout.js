import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

const Layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const order = useSelector(state => state.order.order);
    const loadingMenu = useSelector(state => state.menu.idle);

    const drawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const drawerToggleHandler = () => {
        setShowSideDrawer(prev => !prev);
    }

    return (
        <div id="content">
            <Toolbar 
                showSideDrawer={showSideDrawer}
                drawerToggleClicked={drawerToggleHandler} />
            <TopDrawer 
                open={showSideDrawer} 
                closed={drawerClosedHandler} />
            <div className={classes.Brand}>
                <p>Take sushi away</p>
            </div>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;