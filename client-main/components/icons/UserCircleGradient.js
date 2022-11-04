import * as React from 'react';

function SvgUserCircleGradient({ color, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <defs>
        <linearGradient
          id="UserCircleGradient_svg__a"
          y1={0.103}
          x2={0.955}
          y2={0.891}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#1aa2ff" />
          <stop offset={1} stopColor="#ca1dff" />
        </linearGradient>
      </defs>
      <path
        d="M10 20A10 10 0 012.929 2.929a10 10 0 0114.142 14.142A9.935 9.935 0 0110 20zm0-18.438A8.437 8.437 0 1018.437 10 8.447 8.447 0 0010 1.562zm-.039 9.18a3.75 3.75 0 113.75-3.75 3.754 3.754 0 01-3.75 3.75zm0-5.937a2.187 2.187 0 102.188 2.187A2.19 2.19 0 009.961 4.8zm4.95 10.487a.781.781 0 00.109-1.1 5.769 5.769 0 00-4.478-2.122h-.927a5.769 5.769 0 00-4.478 2.122.781.781 0 001.209.99 4.212 4.212 0 013.27-1.55h.927a4.212 4.212 0 013.27 1.55.781.781 0 001.1.109z"
        fill={color || 'url(#UserCircleGradient_svg__a)'}
      />
    </svg>
  );
}

export default SvgUserCircleGradient;
