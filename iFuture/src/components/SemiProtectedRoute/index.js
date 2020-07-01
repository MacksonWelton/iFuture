import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const SemiProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token')
    const getRedirectProps = (location) => ({
        pathname: "/login", // redireciona pro login
        from: location
    });
    return (
        <Route
            {...rest}
            render={props => {
                return token
                    ? (<Component {...props} />)
                    : (<Redirect to={getRedirectProps(props.location)} />)
            }}
        />
    )
}