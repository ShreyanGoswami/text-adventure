import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    button {
        margin-left:10px;
        margin-right: 10px;
        height:30px;
        width: 50px;
    }

    input {
        height: 25px;
        border-radius: 20px;
    }
`;

export const Content = styled.div`
    align-items: center;
`

export const Text = styled.div`
    margin-top:30px;
    @media screen and (max-width: 768px) {
        font-size: var(--fontMed);
        padding-left: 10px;
    }
`;

