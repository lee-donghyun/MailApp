import React, { createContext, useReducer } from 'react';
import { createGlobalStyle } from 'styled-components';
import '../../node_modules/antd/dist/antd.css';
import Menu from '../menu/Menu';
import MailList from './List';
import Mail from '../mail/Mail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



const GlobalStyle = createGlobalStyle`
html,body{
    margin:0;
    padding:0;
    font-size: 62.5%;
}
`;

const initialState = {
    mailCollapse: false,
    menuCollapse: true,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'COLLAPSE_MAIL':
            return {
                ...state,
                mailCollapse: !state.mailCollapse,
            }
        case 'COLLAPSE_MENU':
            return {
                ...state,
                menuCollapse: !state.menuCollapse,
            }
    }
}

export const MailAppContext = createContext({});

const Main = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { mailCollapse, menuCollapse } = state;
    const value = { dispatch }

    return (
        <>
            <GlobalStyle />
            <MailAppContext.Provider value={value}>
                <BrowserRouter>
                    <Switch>
                        {/* <Route path='/mail-app/menu' component={Menu}/>
                        <Route path='/mail-app/main' component={MailList}/>
                        <Route path='/mail-app/mail' component={Mail}/> */}
                        <Route path='/menu' component={Menu}/>
                        <Route path='/mail' component={Mail}/>
                        <Route path='/' component={MailList}/>
                    </Switch>
                </BrowserRouter>
            </MailAppContext.Provider>
        </>
    );
}

export default Main;