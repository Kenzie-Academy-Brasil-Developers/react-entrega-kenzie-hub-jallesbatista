import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
    /* PRIMARY PALLET */
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    /* GREY SCALE */
    --grey-0 :#F8F9FA;
    --grey-1 :#868E96;
    --grey-2 :#343B41;
    --grey-3 :#212529;
    --grey-4 :#121214;

    /* FEEDBACK PALLET */
    --sucess: #3FE864;
    --negative: #E83F5B;

    /* TYPOGRAPHY */
    --font-size-0: 1.5rem;
    --font-size-1: 1.125rem;
    --font-size-2: 0.875rem;
    --font-size-regular: 1rem;
    --font-size-small: 0.75rem;

    --font-weight-bold: 700;
    --font-weight-semibold: 600;
    --font-weight-medium: 500;
    --font-weight-regular: 400;

    --font-family: 'Inter', sans-serif;

    /* RADIUS */
    --radius-0: 12px;
    --radius-1: 8px;
    --radius-2: 4px;
    
    /* PADDINGS */
    --padding-button-1: 14px 0;
    --padding-button-2: 12px 16px;
    --padding-button-3: 10px;
    --padding-input: 14px;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');

/* RESET */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, select, input, button {
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  font-family: var(--font-family);
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;
