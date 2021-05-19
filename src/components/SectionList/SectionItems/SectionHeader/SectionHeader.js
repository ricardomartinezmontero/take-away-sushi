import React from 'react';

import classes from './SectionHeader.module.css';

import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sectionHeader = (props) => {
    return (
        <div 
            className={classes.SectionHeader}
            onClick={props.onClick} >
            <h2>{props.headerText}</h2>
            {
                !props.collapsed ? 
                    <FontAwesomeIcon icon={faAngleUp} /> :
                    <FontAwesomeIcon icon={faAngleDown} />
            }
        </div>
    );
};

export default sectionHeader;