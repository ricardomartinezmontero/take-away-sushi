import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../../components/Navigation/TopDrawer/TopDrawer';
import DrawerToggle from '../../components/Navigation/TopDrawer/DrawerToggle/DrawerToggle';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    drawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}));
    }

    render () {
        return (
            <React.Fragment>
                <DrawerToggle 
                    open={this.state.showSideDrawer} 
                    clicked={this.drawerToggleHandler} />
                <Toolbar 
                    drawerToggleClicked={this.drawerToggleHandler} />
                <TopDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.drawerClosedHandler} />
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;