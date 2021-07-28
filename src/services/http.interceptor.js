import axios from "axios";

const interceptors = () => {
    axios.interceptors.request.use(
        (request) => {
            if (
                !(
                    request.url.includes("login") ||
                    request.url.includes("sign-up")
                )
            ) {
                request.headers[
                    "greenytaletoken"
                ] = `Bearer sckskskcs8dg8sbfysbjhsc jh`;
            }
            return request;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        function (response) {
            return response.data;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
};

export default interceptors;