import styled from "styled-components";

export const Wrapper = styled.div`
    animation: loadingAnimation 1s;

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