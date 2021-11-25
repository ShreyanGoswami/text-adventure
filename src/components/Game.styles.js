import styled from "styled-components";

export const Wrapper = styled.div`
    animation: loadingAnimation 2s;

    h2 {
        margin: 0px;
        padding-top: 20px;
        padding-left: 80px;
        color:black;
        background-color: var(--palette-color-body-1);
        text-align: left;
    }

    @keyframes loadingAnimation {
        from {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        to {
            opacity: 1;
        }
    }
`;