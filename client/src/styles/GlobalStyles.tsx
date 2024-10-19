"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@tailwind base;
@tailwind components;
@tailwind utilities;

html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --background: #ffffff;
  --foreground: #171717;
 
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
@font-face {
    font-family: Hello-Headline;
    src: url(FontsFree-Net-Hello-Headline-W00-Regular.ttf);
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .container{
    max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 750px) {
    & {
      max-width: 700px;
    }
    & svg {
      width: 70px;
      height: 70px;
    }
  }
  @media (min-width: 992px) {
    & {
      max-width: 950px;
    }
  }
  @media (min-width: 1080px) {
    & {
      max-width: 1050px;
    }
  }
  }
}

`;

export default GlobalStyle;