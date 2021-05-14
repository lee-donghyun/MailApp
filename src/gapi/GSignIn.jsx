import React, { useContext } from 'react';
import { GoogleCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { getInbox, GoogleAuth, signInGoogle, updateListData } from './gmail';
import { MailAppContext } from '../main/Main';


const Button = styled.button`
position: fixed;
bottom: 3vh;
right: 6vh;
width: 6rem;
font-size: 6rem;
background: none;
outline: none;
border: none;
`;

const GSignIn = () => {

    const {dispatch}=useContext(MailAppContext);

    const onClickButton = async() => {
        await signInGoogle();
        if(GoogleAuth.isSignedIn){

            await getInbox();
            await updateListData();
            dispatch({type:'SET_GSIGNIN',gSignIn:true});
        }
        else{
            console.log('log in failed');
        }
    }

    return <Button onClick={onClickButton}><GoogleCircleFilled /></Button>
}

export default GSignIn;