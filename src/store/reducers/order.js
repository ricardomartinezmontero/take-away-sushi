import * as actionTypes from '../actions/actionTypes';

const initialState = {
    order: {}
};

const updateOrder = (state, action) => {

    const item = {
        ...action.item,
        amount: action.amount
    }

    const orderUpdated = {
        ...state.order, 
        [item.name]: item
    };

    if (item.amount === 0) {
        delete orderUpdated[item.name];
    }

    return {
        ...state,
        order: orderUpdated
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_ORDER : return updateOrder(state, action);
        default: return state;
    }
};

export default reducer;