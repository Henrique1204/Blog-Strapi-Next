import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
`;
