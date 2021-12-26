import axiosClient from './axiosClient';

const API_KEY = '/user';

const userApi = {
    getAllUsers: () => {
        return axiosClient.get(`${API_KEY}/getAll`);
    },

    toggleLockUser: (userId) => {
        return axiosClient.get(`${API_KEY}/userLock/${userId}`);
    },
};

export default userApi;
