import styled from "styled-components";

export const Page = styled.div`
height:100vh;
width:${({width})=>width}vw;
margin:0;
padding:0;
overflow:scroll;
overflow-x:hidden;
background:white;
`;

export const Content = styled.div`
padding:0;
margin:0;
// background:skyblue;
`;

export const Margin = styled.div`
margin:0;
padding:0;
height:6rem;
width:100%;
`;