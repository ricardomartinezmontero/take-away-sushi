import React, { Component } from 'react';

import { connect } from 'react-redux';

import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../../components/Navigation/TopDrawer/TopDrawer';
import DrawerToggle from '../../components/Navigation/TopDrawer/DrawerToggle/DrawerToggle';
import Footer from '../../components/Footer/Footer';

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
                <div className={classes.Brand}>
                    <p>Take sushi away</p>
                </div>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <Footer />
                </footer>
                <div className={Object.keys(this.props.order).length > 0 ? classes.ShowMarginBottomDisplay : classes.HideMarginBottomDisplay}></div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.order.order
    };
};

export default connect(mapStateToProps)(Layout);