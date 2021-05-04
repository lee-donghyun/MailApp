import { List } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { MailAppContext } from './Main';
import { MenuOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Page, Content, Margin } from '../page/page.style';

export const Header = styled.div`
width:100vw;
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


const MailList = () => {


    const data = [
        {
            title: '보낸사람 : 도착한 메일!',
            description: '여기에는 도착한 메일에 대한 미리보기가 있습니다. 아주 근사한 기능입니다. 하하 그리고 클릭하면 알림이 뜹니다.'
        },
        {
            title: '보낸사람 : 도착한 메일!',
            description: '여기에는 도착한 메일에 대한 미리보기가 있습니다. 아주 근사한 기능입니다. 하하 그리고 클릭하면 알림이 뜹니다.'
        },
        {
            title: '보낸사람 : 도착한 메일!',
            description: '여기에는 도착한 메일에 대한 미리보기가 있습니다. 아주 근사한 기능입니다. 하하 그리고 클릭하면 알림이 뜹니다.'
        },
        {
            title: '보낸사람 : 도착한 메일!',
            description: '여기에는 도착한 메일에 대한 미리보기가 있습니다. 아주 근사한 기능입니다. 하하 그리고 클릭하면 알림이 뜹니다.'
        },
        {
            title: '보낸사람 : 도착한 메일!',
            description: '여기에는 도착한 메일에 대한 미리보기가 있습니다. 아주 근사한 기능입니다. 하하 그리고 클릭하면 알림이 뜹니다.'
        },
        {
            title: '보낸사람 : 도착한 메일!',
            description: '여기에는 도착한 메일에 대한 미리보기가 있습니다. 아주 근사한 기능입니다. 하하 그리고 클릭하면 알림이 뜹니다.'
        },
        {
            title: '보낸사람 : 도착한 메일!',
            description: '여기에는 도착한 메일에 대한 미리보기가 있습니다. 아주 근사한 기능입니다. 하하 그리고 클릭하면 알림이 뜹니다.'
        },
        {
            title: '보낸사람 : 도착한 메일!',
            description: '여기에는 도착한 메일에 대한 미리보기가 있습니다. 아주 근사한 기능입니다. 하하 그리고 클릭하면 알림이 뜹니다.'
        },
        {
            title: '보낸사람 : 도착한 메일!',
            description: '여기에는 도착한 메일에 대한 미리보기가 있습니다. 아주 근사한 기능입니다. 하하 그리고 클릭하면 알림이 뜹니다.'
        },
    ];

    const history = useHistory();
    const onClickMenu = () => {
        history.push('/menu');
    }
    const onClickNew = () => {
        history.push('/mail');
    }

    return (
        <Page>
            <Margin/>
            <Content>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item style={{ padding: `0.6rem 1.5rem` }} onClick={onClickNew}>
                            <List.Item.Meta
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </Content>
            <Header>
                <Button onClick={onClickMenu}>{<MenuOutlined />}</Button>
                <MailBoxName>받은 편지함</MailBoxName>
                <Button onClick={onClickNew}>{<EditOutlined />}</Button>
            </Header>
        </Page>

    );
}

export default MailList;