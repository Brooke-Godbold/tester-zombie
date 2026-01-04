import { createGlobalStyle } from "styled-components";

import HauntedHillRegular from "../assets/fonts/HauntedHillRegular-Regular.woff2";

const GlobalStyles = createGlobalStyle`
:root {
  /* Brand */
  --color-brand-100: #e9e9e9;
  --color-brand-200: #bcbcbd;
  --color-brand-300: #78787c;
  --color-brand-400: #35353a;
  --color-brand-500: #030304;
  --color-brand-600: #060607;
  --color-brand-700: #0c0c0e;
  --color-brand-800: #121216;
  --color-brand-850: #18181d;
  --color-brand-900: #1e1e24;

  --color-brand-850-transparent: #18181dc0;

  /* Blue */
  --color-blue-300: #2B50AA;
  --color-blue-600: #132a64;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-red-100: #ffdfdf;
  --color-red-400: rgb(255, 84, 84, 0.7);
  --color-red-600: #db2727;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --color-green-300: #bbdef0;
  --color-green-400: #96b2c0;
  --color-green-500: #708590;
  --color-green-600: #4b5960;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-sm: 3px;
  --border-radius-md: 5px;
  --border-radius-lg: 7px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

@font-face {
  font-family: "HauntedHillRegular";
  src: url(${HauntedHillRegular}) format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

* {
  cursor: default;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  height: 100%;
}

body {
  font-family: "HauntedHillRegular", sans-serif;
  color: var(--color-brand-300);
  background-color: var(--color-brand-900);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 2px;
  height: 100%;

  width: 100vw;

  overflow: hidden;
}
`

export default GlobalStyles;