import React from 'react';

import classes from './ModalWindow.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ItemSelector from '../ItemSelector';

const modalWindow = (props) => {
    return (
        <div className={classes.ModalWindow}>
            <div className={classes.Backdrop} onClick={props.closeClick}></div>
            <div className={classes.ModalContent}>
                <div className={classes.Close}>
                    <FontAwesomeIcon 
                        icon={['fa', 'times-circle']} 
                        onClick={props.closeClick} />
                </div>
                <ItemSelector 
                    item={props.item}
                    orderUpdate={props.orderUpdate} />
            </div>
        </div>
    );
};

export default modalWindow;
