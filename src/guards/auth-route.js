import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function isUserAllowed(rest) {
    console.log('rest', rest)
    let activeRole = 0;
    rest.user.Roles.forEach(role => {
        if(role.ActiveStatus) {
            activeRole = parseInt(role.Precedence, 10);
        }
    });
    return rest.allowed === activeRole;
}


const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('rest2', rest)
    const isAllowed = rest.user !== null && isUserAllowed(rest)
    return isAllowed ? 
        (<Component {...rest}/>)
        : <Redirect to="/not-found" />
}


/*
const PrivateRoute = () => {
    
}*/

export default PrivateRoute;