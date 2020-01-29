import React from 'react';

import Header from "./components/Header";
import MainPage from "./components/MainPage";

export const AuthContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

const testState = {
    isAuthenticated: false,
    user: "Adrian",
    token: "test_token",
};

function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            <div style={{alignSelf: 'stretch'}}>
                <Header state={testState} />
                <MainPage />
            </div>
        </AuthContext.Provider>
    );
}

export default App

// COLORS:
//
// #05386B
// #379683
// #5CDB95
// #8EE4AF
// #EDF5E1