import React, { useContext } from 'react';
import { Route } from 'react-router';
import Menu from '../menu/Menu';
import MailList from './List';
import Mail from '../mail/Mail';
import { Transition } from 'react-transition-group';
import { ToLeft, ToRight } from '../transition/transition';
import { MailAppContext } from './Main';


const PC = () => {

    const { toright } = useContext(MailAppContext);

    return (
        <>
            <MailList width={40} />
            <Route exact path='/menu'>
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
        </>
    );
}

export default PC;