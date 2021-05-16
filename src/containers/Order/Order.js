import React, { Component } from 'react';

import { connect } from 'react-redux';

import OrderSummary from '../../components/OrderSummary/OrderSummary';

class Order extends Component {
    render () {
        return (
            <OrderSummary 
                order={this.props.order} 
                removeItem={() => {}} />
        );
    }
}

const mapStateToProps = state => {
    return {
        loadingMenu: state.menu.idle,
        menu: state.menu.menu,
        order: state.order.order
    };
};

export default connect(mapStateToProps)(Order);