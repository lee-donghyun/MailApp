import React, { useContext } from 'react';
import { Route } from 'react-router';
import Menu from '../menu/Menu';
import MailList from './List';
import Mail from '../mail/Mail';
import { Transition } from 'react-transition-group';
import { ToLeft, ToRight } from '../transition/transition';
import { MailAppContext } from './Main';
import styled from 'styled-components';

const MatchMedia = styled.div`
@media (min-width: 800px){
    display:none;
}
`;

const Mobile = () => {

    const { toright } = useContext(MailAppContext);

    return (
        <MatchMedia>
            <Route exact path='/MailApp'>
                {({ match }) => (
                    <Transition
                        in={match != null}
                        timeout={500}
                    >
                        {(state) => {
                            if (!toright) return (
                                <ToRight state={state}>
                                    <MailList width={100}  />
                                </ToRight>
                            );
                            else return (
                                <ToLeft state={state}>
                                    <MailList width={100} />
                                </ToLeft>
                            );
                        }}
                    </Transition>
                )}
            </Route>
            <Route exact path='/MailApp/menu'>
                {({ match }) => (
                    <Transition
                        in={match != null}
                        timeout={500}
                    >
                        {(state) => (
                            <ToRight state={state}>
                                <Menu width={100} />
                            </ToRight>
                        )}
                    </Transition>
                )}
            </Route>
            <Route exact path='/MailApp/mail'>
                {({ match }) => (
                    <Transition
                        in={match != null}
                        timeout={500}
                    >
                        {(state) => (
                            <ToLeft state={state}>
                                <Mail width={100}  />
                            </ToLeft>
                        )}
                    </Transition>
                )}
            </Route>
        </MatchMedia>
    );
}

export default Mobile;