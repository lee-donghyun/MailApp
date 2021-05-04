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
@media (max-width:800px){
    display:none;
}
`;

const PC = () => {
    return (
        <MatchMedia>
            <MailList width={40} />
            <Route exact path='/MailApp/menu'>
                {({ match }) => (
                    <Transition
                        in={match != null}
                        timeout={500}
                    >
                        {(state) => (
                            <ToRight state={state}>
                                <Menu width={40} />
                            </ToRight>
                        )}
                    </Transition>
                )}
            </Route>
            <Mail width={60} />
        </MatchMedia>
    );
}

export default PC;