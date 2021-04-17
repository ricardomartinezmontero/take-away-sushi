import React, { Component } from 'react';

import classes from './SectionItems.module.css';

import SectionHeader from './SectionHeader/SectionHeader';
import ItemList from '../../ItemList/ItemList';

class SectionItems extends Component {

    state = {
        sectionCollapsed: true
    }

    sectionHeaderClickHandler = (event) => {
        this.setState((prev) => {
            return {
                sectionCollapsed: !prev.sectionCollapsed
            }
        });
    }

    render () {
        return (
            <section 
                className={classes.SectionItems}
                onClick={this.sectionHeaderClickHandler} >
                <SectionHeader 
                    headerText={this.props.section} 
                    collapsed={this.state.sectionCollapsed}
                    onClick={this.sectionHeaderClickHandler} />
                <ItemList 
                    collapsed={this.state.sectionCollapsed}
                    items={this.props.items} 
                    itemClicked={this.props.itemClicked} />
            </section>
        );
    }
}

export default SectionItems;