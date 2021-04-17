import React from 'react';

import classes from './Footer.module.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../Logo/Logo';

const footer = (props) => {
    
    library.add(fab);

    return (
        <div className={classes.Footer}>
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
                    <div className={classes.Brand}>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                    </div>
                    <div className={classes.Brand}>
                        <FontAwesomeIcon icon={['fab', 'whatsapp-square']} />
                    </div>
                    <div className={classes.Brand}>
                        <FontAwesomeIcon icon={['fab', 'instagram-square']} />
                    </div>
                    <div className={classes.Brand}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default footer;