import { List } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { MailAppContext } from './Main';
import { MenuOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Page, Content, Margin } from '../page/page.style';
import { listData } from '../gapi/gmail';

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

const MailBoxName = styled.span`
font-size:1.8rem;
opacity:1;
`;

export const Button = styled.button`
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
        dispatch({type:'SET_READING',reading:index});
        history.push('/MailApp/mail');
    }
    
    let data;
    if (!gSignIn) {//if not signed in, show dummy data
        data = [
            {
                title: 'About React Hooks and Media Query',
                senter:'React',
                date:'Now',
                description: 'Mail App using react hooks and Media Query, responsive to viewport size'
            },
        ];
    }
    else {
        data = listData;
    }

    return (
        <Page width={width} >
            <Margin />
            <Content>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item style={{ padding: `0.6rem 1.5rem` }} onClick={()=>onClickThread(index)}>
                            <List.Item.Meta
                                title={`[`+item.senter+`] `+item.title} 
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </Content>
            <Header width={width}>
                <Button onClick={onClickMenu}>{<MenuOutlined />}</Button>
                <MailBoxName>받은 편지함</MailBoxName>
                <Button onClick={() => alert('write new email')}>{<EditOutlined />}</Button>
            </Header>
        </Page>

    );
}

export default MailList;