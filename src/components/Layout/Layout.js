import React, { useState, useEffect } from 'react';

import firebase from '../../utils/firebase';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { setLogin } from '../../store/auth';

import { logout } from '../../store/actions/auth';

import classes from './Layout.module.css';

import { preventBodyScroll } from '../../utils/shared';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import TopDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';
import Spinner from '../../UI/Spinner/Spinner';
import useRouteTransition from '../../utils/shared/useRouteTransition';

const Layout = props => {

    const router = useRouter();

    const { isRouteChangeStart } = useRouteTransition(router);

    const isLogging = useSelector(state => state.auth.isLogging);

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
        return () => {
            preventBodyScroll(false);
        }
    }, [showSideDrawer]);

    const drawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const drawerToggleHandler = () => {
        setShowSideDrawer(prev => !prev);
    }

    const onLogoutHandler = (event) => {
        dispatch(logout());
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
                {isLogging || isRouteChangeStart ? <Spinner /> : props.children}
            </main>
            <Footer />
        </div>
    );
};



export default Layout;