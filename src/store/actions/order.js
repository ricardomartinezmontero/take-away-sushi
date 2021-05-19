import { updateOrder as update } from '../order';

export const updateOrder = (item, amount) => {
    return dispatch => {
        dispatch(update({item, amount}))
    }
}

