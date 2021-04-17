import React from 'react';

import classes from './SectionHeader.module.css';

import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sectionHeader = (props) => {
    return (
        <div className={classes.SectionHeader}>
            <h2>{props.headerText}</h2>
            {
                !props.collapsed ? 
                    <FontAwesomeIcon className={classes.Angle} icon={faAngleUp} /> :
                    <FontAwesomeIcon className={classes.Angle} icon={faAngleDown} />
            }
        </div>
    );
};

export default sectionHeader;