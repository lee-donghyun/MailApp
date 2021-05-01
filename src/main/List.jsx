import { Layout, List } from 'antd';
const { Footer, Sider, Content } = Layout;
import React, { useContext } from 'react';
import styled from 'styled-components';
import { MailAppContext } from './Main';
import { MenuOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

export const Header = styled.div`
width:100vw;
height:6rem;
background:white;
display: flex;
align-items: center;
justify-content: space-between;
position:fixed;
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
        <Layout style={{ height: `100vh`, width: `100vw`, background:`white`}}>
            <Content style={
                {
                    background: `white`,
                    position: `relative`,
                    top:`6rem`
                }
            }>
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
        </Layout>
    );
}

export default MailList;