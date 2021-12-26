import { ActionTypes } from "../constants/action-type";

export const addCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
    };
}

export const updateCart = (product) => {
    return {
        type: ActionTypes.UPDATE_TO_CART,
        payload: product,
    }
}