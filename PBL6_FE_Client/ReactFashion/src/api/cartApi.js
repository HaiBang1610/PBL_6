import axiosClient from './axiosClient';

const API_KEY = '/cart';

const cartApi = {
    saveCart: (cartInfo) => {
        return axiosClient.post(`${API_KEY}/saveCart`, cartInfo);
    },
};

export default cartApi;
