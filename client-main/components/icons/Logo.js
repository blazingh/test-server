import * as React from 'react';

function SvgLogo({ white, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={205.041}
      height={34.423}
      viewBox="0 0 205.041 34.423"
      {...props}
    >
      <defs>
        <linearGradient
          id="Logo_svg__a"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#1aa2ff" />
          <stop offset={1} stopColor="#ca1dff" />
        </linearGradient>
      </defs>
      <path
        data-name="DisTedavim Logo"
        d="M32.819 31.887l3.775-4.521 3.019 1.834-4.529 4.091h0zm1.429-5.127a8.563 8.563 0 01-2.293-.76 14.714 14.714 0 01-2.311-1.435l2.837-3.694a5.589 5.589 0 004.063 1.639c1.661 0 2.5-.488 2.5-1.45 0-.5-.465-.881-1.384-1.122-.644-.147-1.693-.408-3.117-.776a6.219 6.219 0 01-2.92-1.662 5.035 5.035 0 01-1.174-3.659 5.293 5.293 0 01.964-3.21A5.8 5.8 0 0133.952 8.7a9.369 9.369 0 013.4-.64h.081a8.51 8.51 0 012.172.293 10.7 10.7 0 012.135.9 9.912 9.912 0 011.821 1.277l-3.083 3.02a4.865 4.865 0 00-2.941-1c-1.267 0-1.91.355-1.91 1.053 0 .63.478 1.078 1.418 1.329 1.038.275 2.092.538 3.135.778a6.093 6.093 0 012.89 1.588 5.079 5.079 0 011.174 3.694 5.3 5.3 0 01-1.016 3.245 6.069 6.069 0 01-2.717 2.053A9.106 9.106 0 0137 27h-.126a14.4 14.4 0 01-2.625-.24zM10.281 27h-.044a10.79 10.79 0 01-3.845-.707 10.086 10.086 0 01-3.309-1.985 9.6 9.6 0 01-2.277-3.037 9.062 9.062 0 01.017-7.508 9.31 9.31 0 012.26-3.02 10.293 10.293 0 013.309-1.985 11.507 11.507 0 017.759 0l.4.174.4.172V1.356h5.585v16.273a8.575 8.575 0 01-1.418 4.747 9.776 9.776 0 01-3.785 3.383A10.846 10.846 0 0110.3 27zM7.969 13.677A4.779 4.779 0 006.234 15.3a4 4 0 00-.649 2.209 4.245 4.245 0 001.4 3.176 4.722 4.722 0 006.568 0 4.247 4.247 0 001.4-3.176 3.994 3.994 0 00-.649-2.209 4.787 4.787 0 00-1.734-1.625 4.608 4.608 0 00-2.294-.6h0a4.7 4.7 0 00-2.307.602zm178.3 9.959a10.094 10.094 0 01-3.041-7.237A10.385 10.385 0 01204 16.4a10.1 10.1 0 01-3.042 7.237 10.493 10.493 0 01-14.685 0zm1.122-8.855a2.171 2.171 0 00.108 4.34h.11c.05 0 .105-.007.162-.014a2.12 2.12 0 002.037-2.037l-1.4.12a.835.835 0 01-.754.662h-.07a.865.865 0 01-.862-.785v-.057a.823.823 0 01.148-.627.855.855 0 01.556-.34l.072-.009h.091a.841.841 0 01.761.482l1.383-.12a2.11 2.11 0 00-2.055-1.631 2.215 2.215 0 00-.278.017zm4.658-.409a2.175 2.175 0 00.283 4.333c.055 0 .112 0 .175-.006a1.435 1.435 0 00.148-.017 2.185 2.185 0 001.885-2.453 2.207 2.207 0 00-2.49-1.856zm3.2-.139l.361 4.063 1.42-.123-.2-2.227c-.044-.5.143-.792.526-.825h.049c.266 0 .425.2.461.591l.21 2.373 1.389-.12-.2-2.227a.865.865 0 01.14-.65.535.535 0 01.381-.176h.051c.271 0 .427.2.463.591l.211 2.372 1.421-.122-.227-2.547a1.493 1.493 0 00-1.472-1.512H200.082a1.61 1.61 0 00-1.211.707 1.4 1.4 0 00-1.083-.5 1.49 1.49 0 00-.156.008 1.588 1.588 0 00-1.151.662l-.241-.419zM22.664 26.465V8.791l5.586-.017v17.691zm112.292-.19L125.851 7.93l5.693-.034 3.484 7.836L138.46 7.9h5.94l-9.438 18.38zm-80.419-.95A5.446 5.446 0 0152 22.927a8.522 8.522 0 01-.86-4.056v-6.283h-3.7l1.262-4.73h2.434V.475h5.589v7.384h3.711L59.2 12.588h-2.472v5.85c0 1.559 1 2.347 2.975 2.347a3.768 3.768 0 001.471-.224v0l-1.611 5.489a5.522 5.522 0 01-.854.069h0c-.105 0-.211.005-.317.005a9.714 9.714 0 01-3.855-.799zm39.358.794h-.037a10.849 10.849 0 01-3.852-.707 10.085 10.085 0 01-3.306-1.985 9.612 9.612 0 01-2.278-3.038 9.062 9.062 0 01.019-7.508 9.273 9.273 0 012.259-3.02 10.273 10.273 0 013.308-1.985 11.521 11.521 0 017.76 0l.4.174.4.172V.475h5.587v16.274a8.57 8.57 0 01-1.42 4.746 9.747 9.747 0 01-3.785 3.383 10.861 10.861 0 01-5.044 1.241zM91.584 12.8a4.8 4.8 0 00-1.733 1.625 3.983 3.983 0 00-.651 2.205 4.243 4.243 0 001.4 3.176 4.721 4.721 0 006.567 0 4.251 4.251 0 001.4-3.176 4.006 4.006 0 00-.651-2.209 4.772 4.772 0 00-1.725-1.621 4.611 4.611 0 00-2.3-.6h0a4.694 4.694 0 00-2.307.6zM72.352 26.069a10.013 10.013 0 01-4.808-1.227 9.52 9.52 0 01-3.625-3.4 9.257 9.257 0 01-.582-8.578 9.353 9.353 0 012.171-3A9.7 9.7 0 0168.66 7.88a10.419 10.419 0 013.731-.69h.009a10.262 10.262 0 013.706.69 9.78 9.78 0 013.17 1.967 9.138 9.138 0 012.96 6.749v.155a1.355 1.355 0 01-.017.191l-.037.294-2.17.034H67.96a4.518 4.518 0 004.431 3.814 4.352 4.352 0 003.151-1.312l.089-.1.087-.1 3.009 4.247a10.525 10.525 0 01-2.627 1.57 10.272 10.272 0 01-3.7.691zm-2.161-13.308a5.222 5.222 0 00-1.227 1.07h6.865a5.182 5.182 0 00-1.226-1.07 4.421 4.421 0 00-2.209-.585h0-.005a4.42 4.42 0 00-2.198.585zm45.6 13.306h-.022a10.955 10.955 0 01-5.039-1.226 9.93 9.93 0 01-3.785-3.383 9.014 9.014 0 01-.6-8.608 9.419 9.419 0 012.259-3 9.93 9.93 0 013.293-1.95 10.976 10.976 0 013.888-.707 11.359 11.359 0 013.888.69 9.9 9.9 0 013.292 1.967 9.487 9.487 0 012.276 3 8.748 8.748 0 01.824 3.763l-.018 8.99-5.55-.051v-.517a10.19 10.19 0 01-.824.327 10.868 10.868 0 01-3.849.706zM113.5 12.761a4.779 4.779 0 00-1.733 1.626 4.082 4.082 0 00-.649 2.226 4.229 4.229 0 001.4 3.156 4.769 4.769 0 006.567 0 4.225 4.225 0 001.4-3.156 4.075 4.075 0 00-.647-2.226 4.765 4.765 0 00-4.048-2.211v0a4.776 4.776 0 00-2.29.585zm50.243 12.859V14.7c-.1-1.615-.807-2.456-2.12-2.5h-.316c-1.417.046-2.135 1.028-2.135 2.917v10.449h-5.6V15.107a7.906 7.906 0 011.928-5.738 8.483 8.483 0 015.807-2.187h.315a9.622 9.622 0 014.94 1.45 9.484 9.484 0 014.92-1.45h.428a8.477 8.477 0 015.693 2.188 7.906 7.906 0 011.935 5.738v10.508h-5.6v-10.51c0-1.887-.719-2.868-2.135-2.917h-.316c-1.313.047-2.026.89-2.12 2.5v10.927h0zm-17.761-.035V7.91l5.586-.016v17.691zm45.535-8.952a.916.916 0 01.8-1.016.862.862 0 01.113-.007.925.925 0 01.92.8v.032a.848.848 0 01-.164.639.869.869 0 01-.574.337c-.023 0-.047.005-.071.007a.975.975 0 01-.114.007.919.919 0 01-.91-.799zM25.359 6.669h0a2.83 2.83 0 01-1.459-.384 2.937 2.937 0 01-1.049-1.051 2.868 2.868 0 01-.4-1.468 2.836 2.836 0 01.388-1.45 3.121 3.121 0 011.068-1.052 2.85 2.85 0 011.427-.383h.028a2.937 2.937 0 011.471.382 2.988 2.988 0 011.051 1.052 2.958 2.958 0 010 2.918 3 3 0 01-1.051 1.035 2.826 2.826 0 01-1.449.4zm123.318-.88h0a2.829 2.829 0 01-1.456-.382 2.956 2.956 0 01-1.05-1.052 2.867 2.867 0 01-.4-1.467 2.818 2.818 0 01.388-1.45 3.137 3.137 0 011.067-1.055A2.849 2.849 0 01148.652 0h.029a2.929 2.929 0 011.471.383 2.98 2.98 0 011.048 1.052 2.827 2.827 0 01.388 1.45 2.787 2.787 0 01-.388 1.467 3 3 0 01-1.051 1.037 2.833 2.833 0 01-1.455.4z"
        transform="translate(.54 .5)"
        stroke="rgba(0,0,0,0)"
        strokeMiterlimit={10}
        fill={white ? 'white' : 'url(#Logo_svg__a)'}
      />
    </svg>
  );
}

export default SvgLogo;
