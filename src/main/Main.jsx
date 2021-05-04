import React, { createContext, useEffect, useReducer, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import '../../node_modules/antd/dist/antd.css';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Mobile from './Mobile';
import PC from './PC';

const GlobalStyle = createGlobalStyle`
html,body{
    margin:0;
    padding:0;
    width:100vw;
    height:100vh;
    font-size: 62.5%;
    overflow:hidden;
}
`;

const initialState = {
    toright: true,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TORIGHT':
            return {
                ...state,
                toright: action.toright,
            }
    }
}

export const MailAppContext = createContext({});

const Main = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { toright } = state
    const value = { dispatch, toright }

    return (
        <>
            <GlobalStyle />
            <MailAppContext.Provider value={value}>
                <BrowserRouter>
                <PC />
                <Mobile/>
                </BrowserRouter>
            </MailAppContext.Provider>
        </>
    );
}

export default Main;