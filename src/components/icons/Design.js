import * as React from "react";
const SvgDesign = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={38} height={48} {...props}>
    <defs>
      <linearGradient id="design_svg__a" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stopColor="#7C1DC9" stopOpacity="1" />
      <stop offset="100%" stopColor="#00B7D5" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#design_svg__a)"
      d="M16 48a2.583 2.583 0 0 1-2.558-2.545V17.891c0-.146-.438.654 4.9-9.818a.777.777 0 0 1 1.316 0l4.75 9.382c.219.291.146-1.454.146 28A2.583 2.583 0 0 1 22 48Zm-1.1-2.545a1.121 1.121 0 0 0 1.1 1.09h6a1.121 1.121 0 0 0 1.1-1.091v-4.363h-8.192Zm4.823-5.819h3.362V18.618h-3.354Zm-4.823 0h3.361V18.618h-3.353Zm.438-22.472h7.308l-1.389-2.691a6.918 6.918 0 0 1-4.531 0Zm2.047-4a4.874 4.874 0 0 0 3.215 0L19 10.037Zm15.419 8.727a.689.689 0 0 1-.731-.727v-4.437a.689.689 0 0 1 .738-.727h1.243A15.358 15.358 0 0 0 22 4v1.236a.689.689 0 0 1-.731.727h-4.461a.689.689 0 0 1-.731-.727V4A15.356 15.356 0 0 0 4.019 16h1.242a.689.689 0 0 1 .731.727v4.436a.689.689 0 0 1-.731.727H.731A.689.689 0 0 1 0 21.163v-4.436A.689.689 0 0 1 .731 16h1.68a16.8 16.8 0 0 1 9.72-12.291H5.773a2.9 2.9 0 0 1-2.85 2.255A2.988 2.988 0 0 1 0 2.982 2.941 2.941 0 0 1 2.923 0a2.983 2.983 0 0 1 2.923 2.255h10.23V.727A.689.689 0 0 1 16.808 0h4.458A.689.689 0 0 1 22 .727v1.528h10.153A2.967 2.967 0 0 1 38 2.982a2.956 2.956 0 0 1-3 2.982 3.044 3.044 0 0 1-2.85-2.255h-6.427A16.761 16.761 0 0 1 35.442 16h1.827a.689.689 0 0 1 .731.727v4.436a.689.689 0 0 1-.731.727Zm.658-1.454h3.069v-2.982h-3.062Zm-32.008 0h3v-2.982h-3ZM33.469 2.982a1.535 1.535 0 0 0 3.069 0 1.479 1.479 0 0 0-1.462-1.527 1.6 1.6 0 0 0-1.607 1.527ZM17.538 4.509h3V1.454h-3ZM1.462 2.982A1.5 1.5 0 0 0 3 4.509a1.646 1.646 0 0 0 1.531-1.527A1.54 1.54 0 0 0 3 1.454a1.5 1.5 0 0 0-1.538 1.528Z"
    />
  </svg>
);
export default SvgDesign;
