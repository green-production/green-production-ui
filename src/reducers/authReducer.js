const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN-LOGOUT":
            return !state;
        case "JWT-TOKEN":
            return action.token;
        case "USER-DETAILS":
            return action.res;
        default:
            return state;
    }
};

export default authReducer;
