import * as React from "react";
const SvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={19}
    fill="none"
    {...props}
  >
    <path
      stroke="#010101"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.126 9.778 18.741-.056m0 0-8.35-8.62m8.35 8.62-8.618 8.35"
    />
  </svg>
);
export default SvgIcon;
