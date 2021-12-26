import { ActionTypes } from "../constants/action-type";

const initialState = {
    carts: [],
}

const updateValueOfItem = (objs, payload) => {
    const index = objs.findIndex(obj => obj.idGoods === payload.idGoods);
    if (index >= 0) {
        objs[index].quantity = payload.quantity;
        objs[index].total = payload.total;
        return objs;
    }

    return [...objs, payload];
}

export const addCart = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, carts: updateValueOfItem(state.carts, payload) };
        default:
            return state;
    }
}