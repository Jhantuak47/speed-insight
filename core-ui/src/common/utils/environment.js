const hostName = window.location.hostname;
const jsonWrapperUrl = "https://jsonplaceholder.typicode.com";
const apiUrl = "http://localhost:3233";
export const ENV_URL =
    hostName === "localhost"
        ? apiUrl
        : jsonWrapperUrl;
// export const ENV_URL = jsonWrapperUrl;

export const API_PREFIX = hostName === "localhost" ? "" : "/api";
