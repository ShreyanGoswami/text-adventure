import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
    height: 40px;
    padding-top:10px;
    color: var(--lightGrey);
    display:flex;
`;

export const Content = styled.div`
    font-size: var(--fontBig);
    text-align: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        font-size: var(--fontMed);
    }
`