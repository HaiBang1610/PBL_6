import { ActionTypes } from "../constants/action-type";

const initialState = {
    user: {},
}

export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN_USER:
            return { ...state, user: payload };
        case ActionTypes.LOGOUT_USER:
            return { ...state, user: payload };
        default:
            return state;
    }
}