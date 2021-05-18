import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../../components/Navigation/TopDrawer/TopDrawer';
import DrawerToggle from '../../components/Navigation/TopDrawer/DrawerToggle/DrawerToggle';
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
        <React.Fragment>
            <DrawerToggle 
                open={showSideDrawer} 
                clicked={drawerToggleHandler} />
            <Toolbar 
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
            <footer>
                <Footer />
            </footer>
            
        </React.Fragment>
    );
}

export default Layout;