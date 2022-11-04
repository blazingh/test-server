import * as React from 'react';

function SvgAnswerQuestionGradient(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20.008}
      viewBox="0 0 20 20.008"
      {...props}
    >
      <defs>
        <linearGradient
          id="AnswerQuestionGradient_svg__a"
          x1={0.098}
          y1={0.145}
          x2={0.862}
          y2={0.901}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#1aa2ff" />
          <stop offset={1} stopColor="#ca1dff" />
        </linearGradient>
        <clipPath id="AnswerQuestionGradient_svg__b">
          <path
            data-name="Rectangle 7952"
            fill="url(#AnswerQuestionGradient_svg__a)"
            d="M0 0h20v20.008H0z"
          />
        </clipPath>
      </defs>
      <g data-name="Group 24507">
        <g
          data-name="Group 24506"
          clipPath="url(#AnswerQuestionGradient_svg__b)"
          fill="url(#AnswerQuestionGradient_svg__a)"
        >
          <path
            data-name="Path 29332"
            d="M10 20H2.923a1.027 1.027 0 01-.859-1.7l.894-1.2A10 10 0 1110 20zm0-1.531a8.468 8.468 0 10-5.524-2.05l.537.463-1.169 1.591z"
          />
          <path
            data-name="Path 29333"
            d="M12.725 7.947c0 1.128-.6 1.763-2.075 2.5l-.084 1.043a.176.176 0 01-.18.18h-.947a.175.175 0 01-.179-.18l-.109-1.696c-.012-.108.048-.168.156-.2 1.427-.444 1.763-.888 1.763-1.427 0-.587-.588-.9-1.14-.9a2.442 2.442 0 00-1.63.719c-.132.12-.264.132-.372 0l-.576-.707a.261.261 0 01-.011-.36 3.5 3.5 0 012.7-1.235 2.483 2.483 0 012.686 2.266m-1.943 5.5a.869.869 0 11-.863-.863.862.862 0 01.863.863"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgAnswerQuestionGradient;
