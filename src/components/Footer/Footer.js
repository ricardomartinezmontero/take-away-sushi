import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Footer.module.css';

import { countItemsInOrder } from '../../utils/shared';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../Logo/Logo';
import { useRouter } from 'next/router';

const footer = (props) => {

    const order = useSelector(state => state.order.order);

    const router = useRouter();

    const footerStyles = `${classes.Footer} ${countItemsInOrder(order) > 0 && router.pathname === '/menu'? classes.FooterBottomGap : ''}`;

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
                    <FontAwesomeIcon icon={['fab','facebook-square']} className={classes.Brand} />
                    <FontAwesomeIcon icon={['fab','whatsapp-square']} className={classes.Brand} />
                    <FontAwesomeIcon icon={['fab','instagram-square']} className={classes.Brand} />
                    <FontAwesomeIcon icon={['fab','linkedin']} className={classes.Brand} />
                </div>
            </div>
        </footer>
    );
};

export default footer;