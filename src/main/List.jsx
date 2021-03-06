import { List } from 'antd';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MailAppContext } from './Main';
import { MenuOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Page, Content, Margin } from '../page/page.style';
import { listData } from '../gapi/gmail';
import sampleMail from '../sampledata/sampledata';
import NewMail from '../mail/NewMail';

export const Header = styled.div`
width:${({ width }) => width}vw;
height:6rem;
background:white;
display: flex;
align-items: center;
justify-content: space-between;
position:fixed;
top:0;
margin:0;
padding:0;
opacity:0.8;
`;

export const MailBoxName = styled.span`
font-size:1.8rem;
opacity:1;
`;

export const Button = styled.button`
text-align:center;
width:6rem;
font-size:2rem;
background:none;
outline:none;
border:none;
opacity:1;
`;


const MailList = ({ width }) => {

    const { dispatch, gSignIn } = useContext(MailAppContext);

    const history = useHistory();
    const onClickMenu = () => {
        dispatch({ type: 'SET_TORIGHT', toright: true });
        history.push('/MailApp/menu');
    }
    const onClickThread = (index) => {
        dispatch({ type: 'SET_TORIGHT', toright: false });
        dispatch({ type: 'SET_READING', reading: index });
        history.push('/MailApp/mail');
    }

    let data;
    if (!gSignIn) {//if not signed in, show dummy data
        data = sampleMail;
    }
    else {
        data = listData;
    }

    const [modal, setModal] = useState(false);

    return (
        <>
            <Page width={width} >
                <Margin />
                <Content>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item style={{ padding: `0.6rem 1.5rem` }} onClick={() => onClickThread(index)}>
                                <List.Item.Meta
                                    title={`[` + item.senter + `] ` + item.title}
                                    description={item.description.slice(0, 80)}
                                />
                            </List.Item>
                        )}
                    />
                </Content>
                <Header width={width}>
                    <Button onClick={onClickMenu}>{<MenuOutlined />}</Button>
                    <MailBoxName>?????? ?????????</MailBoxName>
                    <Button onClick={() => setModal(!modal)}>{<EditOutlined />}</Button>
                </Header>
            <NewMail modal={modal} setModal={setModal}/>
            </Page>
        </>
    );
}

export default MailList;