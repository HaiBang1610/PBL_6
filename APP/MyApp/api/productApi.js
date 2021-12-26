import axiosClient from './axiosClient';

class ProductApi {
    getProducts = async() => {
        return await axiosClient.get("/goods/getAll").catch((error) => { throw error });
    }

    getProductForCategory = async(categoryId) => {
        return await axiosClient.get(`/goods/searchByGoodsType?valueSearch=${categoryId}`).catch((error) => { throw error });
    }

    getProduct = async(id) => {
        return await axiosClient.get(`/goods/findById/${id}`).catch((error) => {throw error});
    }
}

const productApi = new ProductApi();
export default productApi;