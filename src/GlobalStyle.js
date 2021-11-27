import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontStory: 2rem;
        --fontSmall: 1rem;

        --palette-color-header: #ececec;
        --palette-color-footer: #142d4c;
        --palette-color-body-1: #9fd3c7;
        --palette-color-body-2: #385170;

    }

    body {
        color: var(--white);

        background-color: var(--palette-color-body-1);
    }
`