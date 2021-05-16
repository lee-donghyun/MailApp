import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Button, MailBoxName } from "../main/List";
import { CloseOutlined, SendOutlined, PlusOutlined, FileAddOutlined } from '@ant-design/icons';
import { Transition } from "react-transition-group";
import { base64Encode, sendemail } from "../gapi/gmail";

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
display:flex;
flex-direction:column;
opacity:${({ state }) => state === 'entering' || state === 'entered' ? 1 : 0};
visibility:${({ state }) => state === 'exited' ? 'hidden' : 'visible'};
transition:0.3s;
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

const InputAdress = styled.input.attrs({ type: 'email', multiple: 'true' })`
padding: 0 1rem ;
margin:0;
border:none;
outline:none;
flex:auto;
`;

const Input = ({ tag, inputref }) => {
    return (
        <Container as='form'>
            <Tag>{tag} :</Tag>
            <InputAdress ref={inputref} />
            <Button>
                <PlusOutlined />
            </Button>
        </Container>
    );
}

const Title = ({ inputref }) => {
    return (
        <Container as='form'>
            <Tag>제목 :</Tag>
            <InputAdress type='text' ref={inputref} />
            <Button as='label' for='file'>
                <FileAddOutlined />
                <input type="file" id='file' style={{ display: 'none' }} />
            </Button>
        </Container>
    );
}

const Content = styled.textarea`
font-size:1.5rem;
resize:none;
border:none;
outline:none;
padding:1rem;
// flex:auto;
height:${({ height }) => height / 10}rem;
width:100%;
overflow:hidden;
`;

const ModalBody = styled.div`
display:block;
flex-direction:column;
flex:auto;

border-radius:3rem;
overflow-y:scroll;
`;

const NewMail = ({ modal, setModal }) => {

    const [height, setHeight] = useState(500);
    const resize = (e) => {
        console.log(e.target.scrollHeight);
        if (e.target.scrollHeight !== height) {
            setHeight(e.target.scrollHeight);
            console.log('resized', height);
        }
    }

    const toRef = useRef(null);
    const subjectRef = useRef(null);
    const contentRef = useRef(null);
    const send = async () => {
        const requestBody = base64Encode(toRef.current.value, subjectRef.current.value, contentRef.current.value);
        console.log(requestBody);
        await sendemail(requestBody);
        setModal(false);
    }

    return (
        <Transition
            in={modal}
            timeout={300}
        >
            {state =>
                <Modal state={state}>
                    <ModalHeader>
                        <Button onClick={() => setModal(false)}>{<CloseOutlined />}</Button>
                        <MailBoxName>새로운 편지</MailBoxName>
                        <Button onClick={send}>{<SendOutlined />}</Button>
                    </ModalHeader>
                    <Divider />
                    <Title inputref={subjectRef} />
                    <Divider />
                    <ModalBody>
                        <Input tag='받는 사람' inputref={toRef} />
                        <Divider />
                        <Input tag='참조' />
                        <Divider />
                        <Input tag='숨은 참조' />
                        <Divider />
                        <Content onChange={resize} height={height} ref={contentRef} />
                    </ModalBody>
                </Modal>
            }
        </Transition>
    );
}


export default NewMail;