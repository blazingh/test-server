import * as React from 'react';

function SvgCommentGradient({ ...props }) {
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
          id="CommentGradient_svg__a"
          y1={0.124}
          x2={1}
          y2={0.882}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#1aa2ff" />
          <stop offset={1} stopColor="#ca1dff" />
        </linearGradient>
      </defs>
      <g data-name="Group 3249">
        <g data-name="Group 3244">
          <path
            data-name="Path 18124"
            d="M70.041 80.041h-7.076a1.027 1.027 0 01-.859-1.7L63 77.137a10 10 0 117.045 2.9zm0-1.531a8.469 8.469 0 10-5.524-2.05l.537.463-1.168 1.587z"
            transform="translate(-60.041 -60.041)"
            fill="url(#CommentGradient_svg__a)"
          />
        </g>
        <g data-name="Group 3248">
          <g data-name="Group 3245">
            <path
              data-name="Path 18125"
              d="M164.131 236.185a1.065 1.065 0 11-1.065-1.066 1.065 1.065 0 011.065 1.066z"
              transform="translate(-156.797 -226.185)"
              fill="url(#CommentGradient_svg__a)"
            />
          </g>
          <g data-name="Group 3246">
            <circle
              data-name="Ellipse 243"
              cx={1.065}
              cy={1.065}
              r={1.065}
              fill="url(#CommentGradient_svg__a)"
              transform="translate(8.935 8.934)"
            />
          </g>
          <g data-name="Group 3247">
            <circle
              data-name="Ellipse 244"
              cx={1.065}
              cy={1.065}
              r={1.065}
              fill="url(#CommentGradient_svg__a)"
              transform="translate(12.667 8.934)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgCommentGradient;
