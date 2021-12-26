import axiosClient from './axiosClient';

const API_KEY = '/cart';

const cartApi = {
    getAllBills: () => {
        return axiosClient.get(`${API_KEY}/getAll`);
    },
    toggleStatus: (billId) => {
        return axiosClient.post(`${API_KEY}/toggleStatus/${billId}`);
    },
};

export default cartApi;
