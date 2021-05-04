import React, { createContext, useReducer, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import '../../node_modules/antd/dist/antd.css';
import Menu from '../menu/Menu';
import MailList from './List';
import Mail from '../mail/Mail';
import { BrowserRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { ToLeft, ToRight } from '../transition/transition';


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
    const [currentPage, setCurrentPage] = useState(null);
    const loc = useHistory();

    return (
        <>
            <GlobalStyle />
            <MailAppContext.Provider value={value}>
                <BrowserRouter>
                    {/* <Route path='/mail-app/menu' component={Menu}/>
                        <Route path='/mail-app/main' component={MailList}/>
                        <Route path='/mail-app/mail' component={Mail}/> */}
                    {/* <Route exact path='/'>
                        {({ match }) => (
                            <Transition
                                in={match != null}
                                timeout={500}
                                unmountOnExit
                            >
                                {(state) => (
                                    <MailList />
                                )}
                            </Transition>
                        )}
                    </Route>
                    <Route exact path='/menu'>
                        {({ match }) => (
                            <Transition
                                in={match != null}
                                timeout={500}
                            >
                                {(state) => (
                                    <ToRight state={state}>
                                        <Menu />
                                    </ToRight>
                                )}
                            </Transition>
                        )}
                    </Route>
                    <Route exact path='/mail'>
                        {({ match }) => (
                            <Transition
                                in={match != null}
                                timeout={500}
                            >
                                {(state) => (
                                    <ToLeft state={state}>
                                        <Mail />
                                    </ToLeft>
                                )}
                            </Transition>
                        )}
                    </Route> */}
                    <Switch>
                        <Route path='/menu' component={Menu} />
                        <Route path='/mail' component={Mail} />
                        <Route path='/' component={MailList} />
                    </Switch>
                </BrowserRouter>
            </MailAppContext.Provider>
        </>
    );
}

export default Main;