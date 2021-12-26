import axiosClient from './axiosClient';

const authApi = {
    login: (username, password) => {
        return axiosClient.post('/login', { username, password });
    },
    register: (newUser) => {
        return axiosClient.post('/register', newUser);
    },
};

export default authApi;
