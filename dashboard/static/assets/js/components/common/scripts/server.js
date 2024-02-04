import axios from "axios";
import { notyf } from "../utils/notfy";

let axiosInstance = axios.create({
    headers: genericHeaders
})

export class APICaller {

    static async CreateUserAPI(data) {
        try {
            const response = await axiosInstance.post("/api/v1/account/register", data, {
                headers: genericHeaders,
            });

            return response.data;
        } catch (error) {
            notyf.error(error.response.data.message);
            return error.response;
        }
    }


    static async LoginUserAPI(data) {
        try {
            const response = await axiosInstance.post("/api/v1/account/login", data, {
                headers: genericHeaders,
            });
            return response.data;
        } catch (error) {
            notyf.error(error.response.data.message);
            return error.response;
        }
    }


    static async CheckLoginStatusAPI() {
        try {
            const response = await axiosInstance.get("/api/v1/account/check-auth", {
                headers: genericHeaders,
            });
            return response.data;
        } catch (error) {
            return error.response;
        }
    }


    static async LogoutUserAPI() {
        try {
            const response = await axiosInstance.post("/api/v1/account/logout", {
                headers: genericHeaders,
            });
            return response.data;
        } catch (error) {
            return error.response;
        }
    }


    static async ResetPasswordAPI(data) {
        try {
            const response = await axiosInstance.post("/api/v1/account/reset-password", data, {
                headers: genericHeaders,
            });
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

}