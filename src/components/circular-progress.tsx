interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  sizeW?: number;
  sizeH?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
  showBackground?: boolean;
}

export const CircularProgress = ({
  sizeW = 100,
  sizeH = 100,
}: CircularProgressProps) => {
  return (
    <svg
      width={sizeW}
      height={sizeH}
      viewBox="0 0 227 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_19_403)">
        <path
          d="M114.668 15.3076V15.3086C167.844 15.9821 210.824 58.9644 211.492 112.142L211.5 113.4L211.492 114.668C211.154 141.365 200.148 165.486 182.545 182.979L165.999 166.434C179.645 152.899 188.1 134.139 188.1 113.4C188.1 72.1449 154.656 38.7004 113.4 38.7002C72.1447 38.7002 38.7002 72.1447 38.7002 113.4C38.7003 134.311 47.1362 153.124 60.9834 166.683L44.5947 183.317C27.0727 166.073 15.9997 142.296 15.332 115.931L15.3086 114.668L15.2998 113.4C15.2998 59.2218 59.22 15.3007 113.398 15.2998L114.668 15.3076Z"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.6"
        />
      </g>
      <path
        d="M114.668 15.3076V15.3086C167.844 15.9821 210.824 58.9644 211.492 112.142L211.5 113.4L211.492 114.668C211.154 141.365 200.148 165.486 182.545 182.979L165.999 166.434C179.645 152.899 188.1 134.139 188.1 113.4C188.1 72.1449 154.656 38.7004 113.4 38.7002C72.1447 38.7002 38.7002 72.1447 38.7002 113.4C38.7003 134.311 47.1362 153.124 60.9834 166.683L44.5947 183.317C27.0727 166.073 15.9997 142.296 15.332 115.931L15.3086 114.668L15.2998 113.4C15.2998 59.2218 59.22 15.3007 113.398 15.2998L114.668 15.3076Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="0.6"
      />
      <path
        d="M114.668 15.3076V15.3086C167.844 15.9821 210.824 58.9644 211.492 112.142L211.5 113.4L211.492 114.668C211.154 141.365 200.148 165.486 182.545 182.979L165.999 166.434C179.645 152.899 188.1 134.139 188.1 113.4C188.1 72.1449 154.656 38.7004 113.4 38.7002C72.1447 38.7002 38.7002 72.1447 38.7002 113.4C38.7003 134.311 47.1362 153.124 60.9834 166.683L44.5947 183.317C27.0727 166.073 15.9997 142.296 15.332 115.931L15.3086 114.668L15.2998 113.4C15.2998 59.2218 59.22 15.3007 113.398 15.2998L114.668 15.3076Z"
        stroke="black"
        stroke-opacity="0.2"
        stroke-width="0.6"
      />
      <path
        d="M114.671 15.0082C168.43 15.689 211.8 59.4796 211.8 113.4L211.792 114.671C211.451 141.557 200.326 165.841 182.545 183.404L165.574 166.433C179.291 152.937 187.8 134.164 187.8 113.4C187.8 72.31 154.49 39 113.4 39C72.31 39 39 72.31 39 113.4C39 134.337 47.4887 153.161 61.408 166.68L44.598 183.743C26.6175 166.154 15.3509 141.73 15.0082 114.671L15 113.4C15 59.0552 59.0552 15 113.4 15L114.671 15.0082Z"
        fill="#EA2929"
      />
      <path
        d="M62.9734 162.737L59.6273 163.633L62.0768 166.083L62.9734 162.737Z"
        fill="#D9D9D9"
      />
      <path
        d="M63.6427 63.3745L60.2967 62.4779L62.7462 60.0284L63.6427 63.3745Z"
        fill="#D9D9D9"
      />
      <path
        d="M164.168 162.332L167.514 163.229L165.064 165.678L164.168 162.332Z"
        fill="#D9D9D9"
      />
      <path
        d="M162.814 63.6427L166.16 62.7461L163.711 60.2966L162.814 63.6427Z"
        fill="#D9D9D9"
      />
      <path
        d="M42.905 113.4L39.905 115.132L39.905 111.668L42.905 113.4Z"
        fill="#D9D9D9"
      />
      <path
        d="M184.013 113.4L187.013 115.132L187.013 111.668L184.013 113.4Z"
        fill="#D9D9D9"
      />
      <path
        d="M113.4 42.8763L111.668 39.8763L115.132 39.8763L113.4 42.8763Z"
        fill="#D9D9D9"
      />
      <rect
        x="16.0858"
        y="112.803"
        width="4.36985"
        height="1.20582"
        fill="white"
        fill-opacity="0.1"
      />
      <g filter="url(#filter1_d_19_403)">
        <rect
          x="206.76"
          y="112.803"
          width="4.36985"
          height="1.20582"
          fill="white"
          fill-opacity="0.1"
          shape-rendering="crispEdges"
        />
      </g>
      <g filter="url(#filter2_d_19_403)">
        <rect
          x="179.002"
          y="46.9237"
          width="4.36985"
          height="1.20582"
          transform="rotate(-45 179.002 46.9237)"
          fill="white"
          fill-opacity="0.1"
          shape-rendering="crispEdges"
        />
      </g>
      <g filter="url(#filter3_d_19_403)">
        <rect
          width="4.36985"
          height="1.20582"
          transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 47.8003 46.9237)"
          fill="white"
          fill-opacity="0.1"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_19_403"
          x="0.599999"
          y="0.599999"
          width="225.6"
          height="197.543"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7.2"
            result="effect1_foregroundBlur_19_403"
          />
        </filter>
        <filter
          id="filter1_d_19_403"
          x="201.96"
          y="112.803"
          width="13.9698"
          height="10.8058"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.8" />
          <feGaussianBlur stdDeviation="2.4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_403"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_403"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_19_403"
          x="174.202"
          y="43.8338"
          width="13.5426"
          height="13.5426"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.8" />
          <feGaussianBlur stdDeviation="2.4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_403"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_403"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_19_403"
          x="39.0577"
          y="43.8338"
          width="13.5426"
          height="13.5426"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.8" />
          <feGaussianBlur stdDeviation="2.4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_403"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_403"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
