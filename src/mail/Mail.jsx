import { Divider } from 'antd';
import React from 'react';
import { Header, Button } from '../main/List';
import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Page, Content, Margin } from '../page/page.style';


const mail = {
    senter: `DongHyun Lee`,
    title: `[React] mail app using react hooks `,
    content: `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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

const Mail = ({width}) => {

    const history = useHistory();
    const onClickBack = () => {
        history.push('/');
    }
    const onClickDelete = () => {
        alert('deleted!');
    }

    return (
        <Page width={width} style={{ background: `#f5f5f5` }}>
            <Margin />
            <Content>
                <Title>{mail.title}</Title>
                <Letter>
                    <Senter>{mail.senter}</Senter>2일전
                    <Divider />
                    <MContent>{mail.content}</MContent>
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