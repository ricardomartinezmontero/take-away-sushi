import React, { Component } from 'react';

import classes from './Home.module.css';

class Home extends Component {
    render () {
        return (
            <div className={classes.Home}>
                This is home component
            </div>
        );
    }
}

export default Home;