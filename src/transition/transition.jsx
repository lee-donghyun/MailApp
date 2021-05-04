import styled from "styled-components";

export const ToRight = styled.div`
position:absolute;
top:0;
transition:0.5s;
transform:translateX(${({state})=>(state === "entering" || state === "entered" ? `0vw`:`-100%`)});
`;

export const ToLeft = styled.div`
position:absolute;
top:0;
transition:0.5s;
transform:translateX(${({state})=>(state === "entering" || state === "entered" ? `0vw`:`100%`)});
`;