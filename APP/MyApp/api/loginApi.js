import axiosClient from './axiosClient';

class LoginApi {
    userLogin = async(username, password) => {
        var loginRequest = {
            username: username,
            password: password
        };
        return await axiosClient.post("/login", loginRequest).catch((error) => { throw error });
    }
    
}

const loginApi = new LoginApi();
export default loginApi;