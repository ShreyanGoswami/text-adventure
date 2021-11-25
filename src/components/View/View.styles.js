import styled, { keyframes } from "styled-components";

const textAnimation = keyframes`
    from {
        opacity:0
    }
    to {
        opacity:1
    }
`

export const Wrapper = styled.div`
    button {
        height: 40px;
        width: 90px;
        border-radius: 10px;
        float: right;
    }
`;

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center; 

    .animation {
        animation: ${textAnimation} linear 5s;
    }
`;

export const Text = styled.div`
    text-align: center;
    margin-top: 25px;
    margin-left:5px;
    margin-right:5px;
    word-wrap: break-word;
    width: 100%;

`