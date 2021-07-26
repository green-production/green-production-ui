import React, {createContext, useReducer, useEffect} from 'react'
import authReducer from 'reducers/authReducer'

export const AuthContext = createContext()

const AuthContextProvider = props => {
    const [isAuthenticated, dispatch] = useReducer(authReducer, false, () => {
        const data = JSON.parse(sessionStorage.getItem('isAuthenticated'));
        return !!data
    })
    useEffect(() => {
        sessionStorage.setItem('isAuthenticated', isAuthenticated);
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{isAuthenticated, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider