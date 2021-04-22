import * as actionTypes from './actionTypes';

import { menu } from '../../shared/utils';

export const fetchMenu = () => {
    console.log('[Actions menu.js] Loading menu ...');
    return dispatch => {
        dispatch(fetchMenuStart());
        setTimeout(() => {
            dispatch(setMenu(menu));
        }, 3000);
    };
};

export const fetchMenuStart = () => {
    return {
        type: actionTypes.FETCH_MENU_START
    };
};

export const setMenu = (menu) => {
    return {
        type: actionTypes.SET_MENU,
        menu: menu
    };
};