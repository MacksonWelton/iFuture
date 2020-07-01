import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token')
    const hasAddress = localStorage.getItem('hasAddress')
    const getRedirectProps = (location) => ({
        pathname: "/login", // redireciona pro login
        from: location
    });
    return (
        <Route
            {...rest}
            render={props => {
                return token && hasAddress
                    ? (<Component {...props} />)
                    : (<Redirect to={getRedirectProps(props.location)} />)
            }}
        />
    )
}