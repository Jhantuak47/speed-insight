import axios from "axios";
import { API_PREFIX, ENV_URL } from "../utils/environment";
import { getToken } from "../utils";

const getHeader = () => {
    const isAuthorized = getToken();
    if (isAuthorized) {
        return {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${isAuthorized}`,
        };
    } else {
        return {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",
        };
    }
};

const request = (url, payload, method = "get") => {
    return axios({
        method: method,
        baseURL: `${ENV_URL}${API_PREFIX}`,
        url,
        data: payload,
        headers: getHeader(),
    })
        .then((response) => {
            const { data } = response;

            if (data) {
                return {
                    data: data.data,
                    status: data.status,
                    error: data.error,
                    message: data.msg,
                    success: data.status,
                };
            }

            return {
                success: false
            }

        })
        .catch((error) => {
            console.log("axios error: ", error);
            return {
                success: false,
            }
        });
};

export const ApiCommon = {
    get: (url, payload) =>
        axios({
            method: "get",
            baseURL: `${ENV_URL}${API_PREFIX}`,
            url,
            params: payload,
            headers: getHeader(),
        }),

    post: (url, payload) =>
        axios({
            method: "post",
            baseURL: `${ENV_URL}${API_PREFIX}`,
            url,
            data: payload,
            headers: getHeader(),
        }),
};

export default { request };
