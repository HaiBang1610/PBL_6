import { ActionTypes } from "../constants/action-type";

export const loginUser = (user) => {
    return {
        type: ActionTypes.LOGIN_USER,
        payload: user,
    };
}

export const logoutUser = (user) => {
    return {
        type: ActionTypes.LOGOUT_USER,
        payload: user,
    };
}