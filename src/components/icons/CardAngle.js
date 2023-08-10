import * as React from "react";
const SvgCardAngle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={279.095}
    height={150.76}
    {...props}
  >
    <defs>
      <linearGradient
        id="card_angle_svg__a"
        x2={0.61}
        y2={0.826}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0.297} stopColor="#fbeeff" />
        <stop offset={0.682} stopColor="#fffdff" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
    <path
      fill="url(#card_angle_svg__a)"
      d="M6 4h279.1L6 154.759Z"
      transform="translate(-6 -4)"
    />
  </svg>
);
export default SvgCardAngle;
