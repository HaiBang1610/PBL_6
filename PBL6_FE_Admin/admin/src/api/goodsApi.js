import axiosClient from './axiosClient';

const API_KEY = '/goods';

const goodsApi = {
    getAllGoods: () => {
        return axiosClient.get(`${API_KEY}/getAll`);
    },

    getGoodsById: (goodId) => {
        return axiosClient.get(`${API_KEY}/findById/${goodId}`);
    },

    getGoodsByName: (name) => {
        return axiosClient.get(`${API_KEY}/inputSearch/${name}`);
    },

    getGoodsByQuery: (query) => {
        return axiosClient.get(`${API_KEY}/search`, {
            params: {
                ...query,
            },
        });
    },

    getAllCategories: () => {
        return axiosClient.get(`${API_KEY}/getAllTypeGoods`);
    },

    saveGoods: (newGoods) => {
        return axiosClient.post(`${API_KEY}/saveGoods`, newGoods);
    },

    uploadImage: (idGoods, file) => {
        return axiosClient.put(`${API_KEY}/uploadImage/${idGoods}`, file);
    },

    deleteGoods: (id) => {
        return axiosClient.delete(`${API_KEY}/deleteGoods/${id}`);
    },
};

export default goodsApi;
