import axios from 'axios';

const axiosClient = axios.create({
    baseURL:"http://192.168.1.109:8080",
    timeout:10000,
});

export default axiosClient;
