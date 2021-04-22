import * as actionTypes from '../actions/actionTypes';

const initialState = {
    idle: false,
    menu: []
}

const setMenu = (state, action) => {
    const updatedState = {
        ...state,
        menu: action.menu,
        idle: false
    };
    return updatedState;
}

const fetchMenuStart = (state, action) => {
    const updatedState = {
        ...state,
        idle: true
    };
    return updatedState;
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_MENU_START: return fetchMenuStart(state, action);
        case actionTypes.SET_MENU: return setMenu(state, action);
        default: return state;
    }
}

export default reducer;