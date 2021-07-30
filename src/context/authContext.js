import React, { createContext, useReducer, useEffect } from "react";
import authReducer from "reducers/authReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, dispatch] = useReducer(authReducer, false, () => {
        const data = JSON.parse(sessionStorage.getItem("isAuthenticated"));
        return !!data;
    });
    const [jwtToken, jwtDispatch] = useReducer(authReducer, "", () => {
        return sessionStorage.getItem("jwtToken") || "";
    });
    const [userDetails, userDispatch] = useReducer(authReducer, null, () => {
        return JSON.parse(sessionStorage.getItem("userDetails"));
    });
    const [isWatsonDiscovery, dispatchWatsonDiscovery] = useReducer(authReducer, false);

    useEffect(() => {
        sessionStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    useEffect(() => {
        sessionStorage.setItem("jwtToken", jwtToken);
    }, [jwtToken]);

    useEffect(() => {
        sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
    }, [userDetails]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                jwtToken,
                userDetails,
                isWatsonDiscovery,
                dispatch,
                jwtDispatch,
                userDispatch,
                dispatchWatsonDiscovery
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
