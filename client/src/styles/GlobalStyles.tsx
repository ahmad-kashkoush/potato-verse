"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@tailwind base;
@tailwind components;
@tailwind utilities;

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
}

`;

export default GlobalStyle;
