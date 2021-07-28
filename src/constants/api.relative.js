export const Mock_Environment = false;
export const Json_Server_URL = "/constants/json";
export const Base_URL = "http://localhost:3001/api";
// export const Base_URL = "https://greenytale.herokuapp.com/api";

const RelativeAPI = [
    {
        ApiName: "signup",
        Type: "greenytale",
        MockUrl: "/signup.json",
        RelativeUrl: "/users/signup",
    },
    {
        ApiName: "login",
        Type: "greenytale",
        MockUrl: "/login.json",
        RelativeUrl: "/users/login",
    },
];

export default RelativeAPI;
