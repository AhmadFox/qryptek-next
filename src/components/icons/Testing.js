import * as React from "react";
const SvgTesting = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} {...props}>
    <defs>
      <linearGradient id="testing_svg__a" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset="0%" />
        <stop offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#testing_svg__a)"
      d="M1 36a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v34a1 1 0 0 1-1 1Zm1-2h32V6H19.41l-3.7 3.71A1 1 0 0 1 15 10H2ZM2 8h12.59l3.7-3.71a1 1 0 0 1 .327-.216A1.017 1.017 0 0 1 19 4h15V2H2Zm9.906 19a1 1 0 0 1-.687-.371l-4-5a1 1 0 0 1 1.562-1.249l3.353 4.192 13.215-11.331a1 1 0 1 1 1.3 1.518l-14 12A1 1 0 0 1 12 27h-.094ZM12 5a1 1 0 1 1 1 1 1 1 0 0 1-1-1ZM8 5a1 1 0 1 1 1 1 1 1 0 0 1-1-1ZM4 5a1 1 0 1 1 1 1 1 1 0 0 1-1-1Z"
    />
  </svg>
);
export default SvgTesting;
