import React from 'react';

import classes from './ModalWindow.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import ItemSelector from '../../components/ItemSelector/ItemSelector';

const modalWindow = (props) => {
    return (
        <div className={classes.ModalWindow}>
            <div className={classes.Backdrop} onClick={props.closeClick}></div>
            <div className={classes.ModalContent}>
                <div className={classes.Close}>
                    <FontAwesomeIcon 
                        icon={faTimesCircle} 
                        onClick={props.closeClick} />
                </div>
                <ItemSelector 
                    item={props.item}
                    orderUpdateClick={props.orderUpdate} />
            </div>
        </div>
    );
};

export default modalWindow;
