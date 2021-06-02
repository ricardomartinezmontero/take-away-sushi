import React, { useState, useEffect } from 'react';

import firebase from '../../utils/firebase';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { setLogin } from '../../store/auth';

import { logout } from '../../store/actions/auth';

import classes from './Layout.module.css';

import { preventBodyScroll } from '../../utils/shared';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

const Layout = props => {

    const router = useRouter();

    const redirectPath = useSelector(state => state.auth.redirectPath);

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const observer = firebase.auth().onIdTokenChanged((user) => {
            if (user) {
                dispatch(setLogin(user.toJSON()));
                observer();
            }
        });
    }, [dispatch]);

    useEffect(() => {
        preventBodyScroll(showSideDrawer);
    }, [showSideDrawer]);

    const drawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const drawerToggleHandler = () => {
        setShowSideDrawer(prev => !prev);
    }

    const onLogoutHandler = (event) => {
        dispatch(logout());
        router.replace(redirectPath);
    }

    return (
        <div id="content">
            <Toolbar 
                showSideDrawer={showSideDrawer}
                drawerToggleClicked={drawerToggleHandler} 
                onLogout={onLogoutHandler} />
            <TopDrawer 
                open={showSideDrawer} 
                closed={drawerClosedHandler} 
                onLogout={onLogoutHandler} />
            <div className={classes.Brand}>
                <p>Take sushi away</p>
            </div>
            <main className={classes.Main}>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};



export default Layout;