import React, { useContext, useReducer } from "react";
import { authReducer, initAuth, initialAuthState } from "../reducers/authReducer";
import {loginAction} from "../actions/authActions.js"
const AuthContext = React.createContext([]);

export const AuthProvider = ({ children }) => {
    const contextValue = useReducer(authReducer, initialAuthState, initAuth);
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// const [authState, authDispatch] = useAuthContext();
//
// const login = () => authDispatch(
//     loginAction({
//         user: {
//             userName: userName,
//         },
//         accessToken: "token",
//     })
// );



export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);


// const [authState, authDispatch] = useAuthContext();
// const login = () => authDispatch(
//     loginAction({
//         user: {
//             userName: userName,
//         },
//         accessToken: "token",
//     })
// );