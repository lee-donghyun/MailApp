import React from "react";
import styled from "styled-components";
import { Button, MailBoxName } from "../main/List";
import { CloseOutlined, SendOutlined, PlusOutlined } from '@ant-design/icons';
import { Margin } from "../page/page.style";

const Modal = styled.div`
position:absolute;
top:10vh;
left:10vw;
width:80vw;
@media (max-width:800px){
    left:5vw;
    width:90vw;
}
height:80vh;
background:white;
border-radius:3rem;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
display:${({display})=>display?'flex':'none'};
flex-direction:column;
`;

const ModalHeader = styled.div`
width:100%;
height:6rem;
display: flex;
align-items: center;
justify-content: space-between;
position:static;
margin:0;
padding:0;
opacity:0.8;
`;

const Divider = styled.div`
background:#f5f5f5;
display:block;
margin:0;
padding:0;
height:0.15rem;
`;

const Container = styled.div`
display:flex;
padding:1rem;
font-size:1.5rem;
align-items:center;
`;

const Tag = styled.span`
padding: 0;
margin:0;
`;

const InputAdress = styled.input.attrs({type: 'email',multiple:'any'})`
padding: 0 1rem ;
margin:0;
border:none;
outline:none;
flex:auto;
`;

const Input = ({tag}) => {
    return(
        <Container>
            <Tag>{tag} :</Tag>
            <InputAdress/>
            <Button>
                <PlusOutlined />
            </Button>
        </Container>
    );
}

const Content = styled.textarea.attrs({rows:'20'})`
font-size:1.5rem;
resize:none;
border:none;
outline:none;
padding:1rem;
`;


const NewMail = ({display, setModal}) => {
    return(
        <Modal display={display}>
            <ModalHeader>
                <Button onClick={() => setModal(false)}>{<CloseOutlined />}</Button>
                <MailBoxName>새로운 편지</MailBoxName>
                <Button onClick={() => setModal(false)}>{<SendOutlined />}</Button>
            </ModalHeader>
            <Divider/>
            <Input tag='받는 사람'/>
            <Divider/>
            <Input tag='참조'/>
            <Divider/>
            <Input tag='숨은 참조'/>
            <Divider/>
            <Input tag='제목'/>
            <Divider/>
            <Content/>
        </Modal>
    );
}


export default NewMail;