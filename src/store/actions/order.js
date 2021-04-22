import * as actionTypes from './actionTypes';

export const updateOrder = (item, amount) => {
    return {
        type: actionTypes.UPDATE_ORDER,
        item: item,
        amount: amount
    }
}

