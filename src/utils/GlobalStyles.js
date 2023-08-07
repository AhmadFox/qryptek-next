import React, { Fragment } from "react";
import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`

  html, body {
    height: 100%;
  }

  body {
    ${tw`bg-dark text-light font-primary`}
    font-family: Inter, "system-ui";

  }

  #__next {
    ${tw`flex flex-col justify-between min-h-full`}
  }

  main {
    ${tw`mb-auto`}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  small,
  ul,
  li,
  a
   {
    ${tw`font-primary`}
  }

  a {
    ${tw`inline-block`}
  }

  [multiple],
  [type="date"],
  [type="datetime-local"],
  [type="email"],
  [type="tel"],
  [type="text"],
  [type="time"],
  [type="url"],
  [type="week"],
  [type="month"],
  [type="number"],
  [type="password"],
  [type="search"],
  select,
  textarea {
    ${tw`appearance-none outline-none bg-transparent py-3 xl:py-4 3xl:py-5 border-0 border-b-2 border-orange-500 text-light`}
  }
`;

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <Global styles={customStyles} />
  </Fragment>
);

export default GlobalStyles;