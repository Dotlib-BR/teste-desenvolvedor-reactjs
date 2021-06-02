import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    @media (max-width: 1440px) {
        html {
            font-size: 97%;
        }
    }
    @media (max-width: 1024px) {
        html {
            font-size: 96%;
        }
    }
    @media (max-width: 768px) {
        html {
            font-size: 95%;
        }
    }
    @media (max-width: 425px) {
        html {
            font-size: 93%;
        }
    }
`;
