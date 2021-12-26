import { ActionTypes } from "../constants/action-type";

export const getAllProducts = (product) => {
    return {
        type: ActionTypes.GET_ALL_PRODUCTS,
        payload: product,
    };
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
}
