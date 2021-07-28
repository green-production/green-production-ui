import appSettings from "../constants/api.constants.js";
import httpService from "../services/http.service";

const Core = {
    loginService(data, headers) {
        return httpService.post(appSettings.login, data, headers);
    },

    signupService(api, data) {
        return httpService.post(appSettings.signup, data);
    },
};

export default Core;
