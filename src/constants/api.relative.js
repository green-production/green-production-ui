export const Mock_Environment = false;
export const Json_Server_URL = "/constants/json";
export const Base_URL = "http://localhost:3001/api";
export const Watson_URL = `https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/e58f4c75-a324-40d1-9fc9-6f5f99b03d81/v1/environments/${process.env.REACT_APP_ENVIRONMENT_ID}/collections/${process.env.REACT_APP_COLLECTION_ID}/query?version=2019-04-30&query=`;
// export const Base_URL = "https://greenytale.herokuapp.com/api";

const RelativeAPI = [
    {
        ApiName: "signup",
        Type: "greenytale",
        MockUrl: "/signup.json",
        RelativeUrl: "/users/sign-up",
    },
    {
        ApiName: "login",
        Type: "greenytale",
        MockUrl: "/login.json",
        RelativeUrl: "/users/login",
    },
    {
        ApiName: "enriched_text.entities.text:",
        Type: "greenytale",
        MockUrl: "/search.json",
        RelativeUrl: "",
    },
];

export default RelativeAPI;
