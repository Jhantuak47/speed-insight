export const setToken = (token) => {
    if (token) {
        window.localStorage.setItem("accessToken", token);
    }
};

export const getToken = () => window.localStorage.getItem("accessToken");

export const removeToken = () => window.localStorage.removeItem("accessToken");
