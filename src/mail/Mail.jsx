import { Divider } from 'antd';
import React, { useContext } from 'react';
import { Header, Button } from '../main/List';
import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Page, Content, Margin } from '../page/page.style';
import { MailAppContext } from '../main/Main';
import { listData } from '../gapi/gmail';
import sampleMail from '../sampledata/sampledata';



const Title = styled.span`
display:block;
font-size:2rem;
padding: 1rem 1.5rem;
`;
const Senter = styled.span`
display:block;
font-size:2rem;
padding:1rem 0;
`;
const Letter = styled.div`
background:white;
margin:1rem;
padding:1rem;
`;
const MContent = styled.p`
font-size:1.4rem;
`;

const Mail = ({ width }) => {

    const { gSignIn, reading } = useContext(MailAppContext);

    const history = useHistory();
    const onClickBack = () => {
        history.push('/MailApp');
    }
    const onClickDelete = () => {
        alert('deleted!');
    }

    let mail;
    if (!gSignIn) {
        mail = sampleMail[reading];
    }
    else {
        mail = listData[reading];
    }

    return (
        <Page width={width} style={{ background: `#f5f5f5` }}>
            <Margin />
            <Content>
                <Title>{mail.title}</Title>
                <Letter>
                    <Senter>{mail.senter}</Senter>2일전
                    <Divider />
                    {/* <MContent>{decodeURIComponent(atob(mail.content))}</MContent> */}
                    <MContent>{mail.description}</MContent>
                </Letter>
            </Content>
            <Header width={width}>
                <Button onClick={onClickBack}><ArrowLeftOutlined /></Button>
                <Button onClick={onClickDelete}><DeleteOutlined /></Button>
            </Header>
        </Page>
    );
}

export default Mail;