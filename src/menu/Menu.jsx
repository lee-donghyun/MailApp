import React from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;
import { Menu } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Page } from '../page/page.style';
const { SubMenu } = Menu;

const UserName = styled.span`
padding:2rem;
font-size:2rem;
background:white;
display:block;
`;

const Mail = () => {

    const history = useHistory();
    const onClickItem = () => {
        history.push('/');
    }

    return (
            // <Layout style={{ width: `100vw`, height: `100vh` }} >
                <Page>
                <UserName>DongHyun Lee</UserName>
                <Menu mode="inline">
                    <SubMenu key="sub1" title="받은 메일함">
                        <Menu.Item key="1" onClick={onClickItem}>기본</Menu.Item>
                        <Menu.Item key="2">소셜</Menu.Item>
                        <Menu.Item key="3">홍보</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="라벨">
                        <Menu.Item key="4">별표편지함</Menu.Item>
                        <Menu.Item key="5">보낸편지함</Menu.Item>
                        <Menu.Item key="6">임시보관함</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title="더보기">
                        <Menu.Item key="7">중요</Menu.Item>
                        <Menu.Item key="8">서클 메일</Menu.Item>
                        <Menu.Item key="9">전체보관함</Menu.Item>
                        <Menu.Item key="10">휴지통</Menu.Item>
                        <Menu.Item key="11">스팸함</Menu.Item>
                    </SubMenu>
                </Menu>
                </Page>
            // {/* </Layout> */}
    );
}

export default Mail;