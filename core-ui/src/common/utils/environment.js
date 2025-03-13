import { appConfig } from "../../configs";

const hostName = window.location.hostname;
const APP_URL = appConfig.APP.APP_URL || ""
const APP_PORT = appConfig.APP.PORT || 3333;
const appUrl = APP_URL + ":" + APP_PORT;

export const ENV_URL =
    hostName === "localhost"
        ? `http://localhost:${APP_PORT}`
        : appUrl;

export const API_PREFIX = "";
