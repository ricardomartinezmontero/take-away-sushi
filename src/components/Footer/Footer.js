import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Footer.module.css';

import { countItemsInOrder } from '../../utils/shared';

import { faFacebookSquare, faWhatsappSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../Logo/Logo';

const footer = (props) => {

    const order = useSelector(state => state.order.order);

    const footerStyles = `${classes.Footer} ${countItemsInOrder(order) > 0 && classes.FooterBottomGap}`;

    return (
        <footer className={footerStyles}>
            <div className={classes.Logo}>
                <Logo />
            </div>
        
            <div className={classes.WebMap}>
                <ul>
                    <li>Carta</li>
                    <li>Menu</li>
                    <li>Unete al Equipo</li>
                    <li>Contacto</li>
                    <li>Blog</li>
                    <li>Alergenos</li>
                    <li>Prensa</li>
                </ul>
                <ul>
                    <li>Solicita tu Factura</li>
                    <li>Politica de Privacidad</li>
                    <li>Aviso Legal</li>
                    <li>Bases y Condiciones</li>
                    <li>Politica de Cookies</li>
                </ul>
            </div>
            
            <div className={classes.MediaContainer}>
                <div className={classes.MediaTitle}>Siguenos</div>
                <div className={classes.Media}>
                    <FontAwesomeIcon icon={faFacebookSquare} className={classes.Brand} />
                    <FontAwesomeIcon icon={faWhatsappSquare} className={classes.Brand} />
                    <FontAwesomeIcon icon={faInstagramSquare} className={classes.Brand} />
                    <FontAwesomeIcon icon={faLinkedin} className={classes.Brand} />
                </div>
            </div>
        </footer>
    );
};

export default footer;