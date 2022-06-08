import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
object,
iframe,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
code,
em,
img,
small,
strike,
strong,
sub,
sup,
tt,
b,
u,
i,
ol,
ul,
li,
fieldset,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
main,
canvas,
embed,
footer,
header,
nav,
section,
video {
    margin: 0;
    padding: 0;

    outline: 0;
    border: 0;
    list-style: none;
    color: var(--black-logo);

    font-style: none;
    font-size: 100%;
    // font: inherit;
    text-decoration: none;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;

    -webkit-font-smoothing: antialiased;
    // text-size-adjust: none;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

*,
*:after,
*:before {
    margin: 0;
    padding: 0;

    outline: 0;
    border: 0;
    list-style: none;
    color: var(--black-logo);

    font-style: none;
    font-size: 100%;
    // font: inherit;
    text-decoration: none;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;

    -webkit-font-smoothing: antialiased;
    // text-size-adjust: none;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

footer,
header,
nav,
section,
main {
    display: block;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

html{
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
}

body{
    min-height: 100vh;
}

main{
    min-height: calc(100vh - 27rem);
    padding: 0.5rem;
}
`;
