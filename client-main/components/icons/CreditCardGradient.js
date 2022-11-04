import * as React from 'react';

function SvgCreditCardGradient(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={18.111}
      viewBox="0 0 20 18.111"
      {...props}
    >
      <defs>
        <linearGradient
          id="CreditCardGradient_svg__a"
          x1={-0.035}
          y1={0.258}
          x2={1.047}
          y2={0.676}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#1aa2ff" />
          <stop offset={1} stopColor="#ca1dff" />
        </linearGradient>
      </defs>
      <path
        data-name="Union 59"
        d="M11351.153 21704.111a2.157 2.157 0 01-2.155-2.154v-8.523a2.161 2.161 0 011.3-1.979l-.111-.633a2.159 2.159 0 011.748-2.494l13.018-2.295a2.157 2.157 0 012.5 1.748l1.521 8.609a2.153 2.153 0 01-1.747 2.492l-.987.178v2.9a2.157 2.157 0 01-2.154 2.154zm-.979-2.154a.979.979 0 00.979.979h12.924a.979.979 0 00.979-.979v-4.176h-14.881zm14.979-14.77l-13.018 2.3a.978.978 0 00-.793 1.135l.114.654h12.62a2.16 2.16 0 012.154 2.158v4.428l.781-.135a.977.977 0 00.794-1.135l-1.518-8.605a.973.973 0 00-.962-.809 1.05 1.05 0 00-.172.01zm-14.979 9.422h14.881v-1.494h-14.881zm0-3.176v.51h14.881v-.51a.981.981 0 00-.979-.982h-12.924a.981.981 0 00-.977.983zm1.813 8.318a.588.588 0 010-1.176h2.664a.588.588 0 110 1.176z"
        transform="translate(-11348.998 -21686)"
        fill="url(#CreditCardGradient_svg__a)"
      />
    </svg>
  );
}

export default SvgCreditCardGradient;
