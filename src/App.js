import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import styles from './App.module.css';

import Home from './containers/Home/Home';
import Menu from './containers/Menu/Menu';
import Order from './containers/Order/Order';


import Layout from './hoc/Layout/Layout';

class App extends Component {

  render () {
    return (
      <Layout>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/home'} exact component={Home} />
          <Route path={'/menu'} component={Menu} />
          <Route path={'/order'} component={Order} />
          <Route path={'/authenticate'} component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
