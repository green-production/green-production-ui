import React, { createContext, useReducer, useEffect } from "react";
import authReducer from "reducers/authReducer";

export const AuthContext = createContext();

/* eslint-disable */
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

    useEffect(() => {
        sessionStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    useEffect(() => {
        jwtToken ? sessionStorage.setItem("jwtToken", jwtToken) : "";
    }, [jwtToken]);

    useEffect(() => {
        userDetails
            ? sessionStorage.setItem("userDetails", JSON.stringify(userDetails))
            : "";
    }, [userDetails]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                jwtToken,
                userDetails,
                dispatch,
                jwtDispatch,
                userDispatch,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
