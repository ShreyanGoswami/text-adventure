import styled from "styled-components";


export const Wrapper = styled.div`
    padding-top: 20px;
    background: var(--palette-color-body-1);
`;

export const Content = styled.div`
    background: var(--palette-color-body-2);
    margin-left: 80px;
    margin-right: 80px;
    border-radius: 30px;
    margin-bottom: 0px;
    height: 77vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--fontStory);

    .text {
        margin-bottom: 50px;
    }
`;
