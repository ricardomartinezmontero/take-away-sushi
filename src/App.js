import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import styles from './App.module.css';

import Home from './containers/Home/Home';


import Layout from './hoc/Layout/Layout';

class App extends Component {

  render () {
    return (
      <Layout>
        <Switch>
          <Route path={'/'} exact render={() => <div></div>} />
          <Route path={'/home'} component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
