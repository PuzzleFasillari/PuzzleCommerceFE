'use client';

import { Josefin_Sans } from 'next/font/google';
import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  html,
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
   ${styles}
`;

export default GlobalStyle;
