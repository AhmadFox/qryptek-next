import * as React from "react";
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33.914}
    height={26.581}
    {...props}
  >
    <defs>
      <linearGradient id="arrow_svg__a" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stopColor="#00B7D5" stopOpacity="1" />
      <stop offset="100%" stopColor="#7C1DC9" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#arrow_svg__a)"
      d="M20.123 3.5a.458.458 0 0 1 .324.134l12.832 12.832a.458.458 0 0 1 0 .648L20.447 29.947a.458.458 0 0 1-.782-.324v-6.875H1.425A2.519 2.519 0 0 1 .251 22.6a1.366 1.366 0 0 1-.6-.6A2.52 2.52 0 0 1-.5 20.823v-8.065a2.52 2.52 0 0 1 .15-1.174 1.366 1.366 0 0 1 .6-.6 2.519 2.519 0 0 1 1.174-.15h18.24V3.958a.458.458 0 0 1 .458-.458Zm12.184 13.291L20.582 5.065v6.226a.458.458 0 0 1-.458.458H1.425a2.546 2.546 0 0 0-.758.05.455.455 0 0 0-.2.2 2.546 2.546 0 0 0-.05.758v8.066a2.547 2.547 0 0 0 .05.758.455.455 0 0 0 .2.2 2.547 2.547 0 0 0 .758.05h18.7a.458.458 0 0 1 .458.458v6.226Z"
      transform="translate(.5 -3.5)"
    />
  </svg>
);
export default SvgArrow;
