import React, { createContext, useEffect, useReducer, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import '../../node_modules/antd/dist/antd.css';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Mobile from './Mobile';
import PC from './PC';
import { initGAPI } from '../gapi/gmail';
import GSignIn from '../gapi/GSignIn';

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
    reading: 0,
    gSignIn: false,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TORIGHT':
            return {
                ...state,
                toright: action.toright,
            }
        case 'SET_READING':
            return {
                ...state,
                reading: action.reading,
            }
        case 'SET_GSIGNIN':
            return {
                ...state,
                gSignIn: action.gSignIn,
            }
    }
}

export const MailAppContext = createContext({});

const Main = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { toright, reading, gSignIn } = state;
    const value = { dispatch, toright, reading, gSignIn };

    useEffect(() => {
        initGAPI();
    }, []);

    return (
        <>
            <GlobalStyle />
            <MailAppContext.Provider value={value}>
                <BrowserRouter>
                    <PC />
                    <Mobile />
                    <GSignIn />
                </BrowserRouter>
            </MailAppContext.Provider>
        </>
    );
}

export default Main;