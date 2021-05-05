import React from 'react';
import { GoogleCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { signInGoogle } from './gmail';


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
    return <Button onClick={signInGoogle}><GoogleCircleFilled /></Button>
}

export default GSignIn;