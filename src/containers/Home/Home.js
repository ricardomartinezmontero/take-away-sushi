import React, { Component } from 'react';

import classes from './Home.module.css';

import Spinner from '../../UI/Spinner/Spinner';

class Home extends Component {
    render () {
        return (
            <div className={classes.Home}>
                <Spinner />
            </div>
        );
    }
}

export default Home;