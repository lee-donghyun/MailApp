import { Layout, Divider  } from 'antd';
const { Content } = Layout;
import React from 'react';
import { Header, Button } from '../main/List';
import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';


const mail = {
    senter: `DongHyun Lee`,
    title: `[깜짝 뉴스] 오늘 저녁 메뉴 소고기 `,
    content: `
    엄청 맛잇게 먹을 것으로 예상이 되ㅡ는 가운데 나느 지굼 배가 엄청나게 고프다.. 빨리 저녁먹고싶어.. 2021년 화아이팅
    엄청 맛잇게 먹을 것으로 예상이 되ㅡ는 가운데 나느 지굼 배가 엄청나게 고프다.. 빨리 저녁먹고싶어.. 2021년 화아이팅
    엄청 맛잇게 먹을 것으로 예상이 되ㅡ는 가운데 나느 지굼 배가 엄청나게 고프다.. 빨리 저녁먹고싶어.. 2021년 화아이팅
    엄청 맛잇게 먹을 것으로 예상이 되ㅡ는 가운데 나느 지굼 배가 엄청나게 고프다.. 빨리 저녁먹고싶어.. 2021년 화아이팅
    엄청 맛잇게 먹을 것으로 예상이 되ㅡ는 가운데 나느 지굼 배가 엄청나게 고프다.. 빨리 저녁먹고싶어.. 2021년 화아이팅
    엄청 맛잇게 먹을 것으로 예상이 되ㅡ는 가운데 나느 지굼 배가 엄청나게 고프다.. 빨리 저녁먹고싶어.. 2021년 화아이팅
    엄청 맛잇게 먹을 것으로 예상이 되ㅡ는 가운데 나느 지굼 배가 엄청나게 고프다.. 빨리 저녁먹고싶어.. 2021년 화아이팅
    엄청 맛잇게 먹을 것으로 예상이 되ㅡ는 가운데 나느 지굼 배가 엄청나게 고프다.. 빨리 저녁먹고싶어.. 2021년 화아이팅
    `
}
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

const Mail = () => {

    const history = useHistory();
    const onClickBack = () => {
        history.push('/');
    }
    const onClickDelete = () => {
        alert('deleted!');
    }

    return (
        <Layout style={{ width: `100vw`, height: `100vh` }}>
            <Content style={
                {
                    position: `relative`,
                    top: `7rem`,
                }
            }>
                <Title>{mail.title}</Title>
                <Letter>
                    <Senter>{mail.senter}</Senter>2일전
                    <Divider />
                    <MContent>{mail.content}</MContent>
                </Letter>
            </Content>
            <Header>
                <Button onClick={onClickBack}><ArrowLeftOutlined /></Button>
                <Button onClick={onClickDelete}><DeleteOutlined /></Button>
            </Header>
        </Layout>
    );
}

export default Mail;