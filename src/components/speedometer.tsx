export const SpeedometerSVG = ({
  speed = 0,
  maxSpeed = 200,
  width = 240,
  height = 240,
  trackColor = "rgba(255,255,255,0.1)",
  tickColor = "#D9D9D9",
  blurIntensity = 10,
  secondaryProgressWidth = 1.5,
  tickerSize = 3,
  tickerOffset = 1.5,
}) => {
  const scaleX = width / 227;
  const scaleY = height / 199;
  const scaleTransform = `scale(${scaleX}, ${scaleY}) translate(${
    (width / scaleX - 200) / 2
  }, ${(height / scaleY - 225) / 2})`;
  const scaleMin = Math.min(scaleX, scaleY);

  const progressRatio = Math.max(0, Math.min(1, speed / maxSpeed));

  const centerX = 113.4;
  const centerY = 113.4;
  const outerRadius = 98.4;
  const innerRadius = 74.7;

  const startAngle = 135;
  const totalAngle = 270;
  const progressAngle = progressRatio * totalAngle;
  const endAngle = startAngle + progressAngle;

  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;

  const outerStartX = centerX + outerRadius * Math.cos(startRad);
  const outerStartY = centerY + outerRadius * Math.sin(startRad);
  const outerEndX = centerX + outerRadius * Math.cos(endRad);
  const outerEndY = centerY + outerRadius * Math.sin(endRad);

  const innerStartX = centerX + innerRadius * Math.cos(startRad);
  const innerStartY = centerY + innerRadius * Math.sin(startRad);
  const innerEndX = centerX + innerRadius * Math.cos(endRad);
  const innerEndY = centerY + innerRadius * Math.sin(endRad);

  const largeArcFlag = progressAngle > 180 ? 1 : 0;

  const progressPath =
    progressAngle > 0
      ? `M ${outerStartX} ${outerStartY} 
         A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}
         L ${innerEndX} ${innerEndY}
         A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}
         Z`
      : "";

  const trackEndAngle = startAngle + totalAngle;
  const trackEndRad = (trackEndAngle * Math.PI) / 180;
  const trackOuterEndX = centerX + outerRadius * Math.cos(trackEndRad);
  const trackOuterEndY = centerY + outerRadius * Math.sin(trackEndRad);
  const trackInnerEndX = centerX + innerRadius * Math.cos(trackEndRad);
  const trackInnerEndY = centerY + innerRadius * Math.sin(trackEndRad);
  const trackLargeArcFlag = totalAngle > 180 ? 1 : 0;

  const trackPath = `M ${outerStartX} ${outerStartY} 
     A ${outerRadius} ${outerRadius} 0 ${trackLargeArcFlag} 1 ${trackOuterEndX} ${trackOuterEndY}
     L ${trackInnerEndX} ${trackInnerEndY}
     A ${innerRadius} ${innerRadius} 0 ${trackLargeArcFlag} 0 ${innerStartX} ${innerStartY}
     Z`;

  const thinProgressAngle = progressAngle;
  const thinEndRad = (startAngle + thinProgressAngle) * (Math.PI / 180);

  const thinRadius = outerRadius - 32;
  const thinStartX = centerX + thinRadius * Math.cos(startRad);
  const thinStartY = centerY + thinRadius * Math.sin(startRad);
  const thinEndX = centerX + thinRadius * Math.cos(thinEndRad);
  const thinEndY = centerY + thinRadius * Math.sin(thinEndRad);

  const thinArcPath =
    thinProgressAngle > 0
      ? `M ${thinStartX} ${thinStartY} A ${thinRadius} ${thinRadius} 0 ${
          thinProgressAngle > 180 ? 1 : 0
        } 1 ${thinEndX} ${thinEndY}`
      : "";

  const backgroundPathD =
    "M114.668 15.3076V15.3086C167.844 15.9821 210.824 58.9644 211.492 112.142L211.5 113.4L211.492 114.668C211.154 141.365 200.148 165.486 182.545 182.979L165.999 166.434C179.645 152.899 188.1 134.139 188.1 113.4C188.1 72.1449 154.656 38.7004 113.4 38.7002C72.1447 38.7002 38.7002 72.1447 38.7002 113.4C38.7003 134.311 47.1362 153.124 60.9834 166.683L44.5947 183.317C27.0727 166.073 15.9997 142.296 15.332 115.931L15.3086 114.668L15.2998 113.4C15.2998 59.2218 59.22 15.3007 113.398 15.2998L114.668 15.3076Z";

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>

        
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="19%" stopColor="#C2410C" />
          <stop offset="100%" stopColor="#431407" />
        </linearGradient>

        <linearGradient id="circleSmall" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="19%" stopColor="#C2410C" />
          <stop offset="100%" stopColor="#431407" />
        </linearGradient>

        <linearGradient id="redGradientBlur" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="19%" stopColor="#C2410C" />
          <stop offset="100%" stopColor="#431407" />
        </linearGradient>

        <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={blurIntensity * scaleMin} />
        </filter>

        <filter
          id="filter0_f"
          x="0.6"
          y="0.6"
          width="225.6"
          height="197.543"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={7.2 * scaleMin}
            result="effect1_foregroundBlur"
          />
        </filter>
      </defs>

      <g transform={scaleTransform}>
        <g filter="url(#filter0_f)">
          <path
            d={backgroundPathD}
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="0.6"
            fill="none"
          />
        </g>
        <path
          d={backgroundPathD}
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d={backgroundPathD}
          stroke="black"
          strokeOpacity="0.2"
          strokeWidth="0.6"
          fill="none"
        />
      </g>

      <g transform={scaleTransform}>
        <path d={trackPath} fill={trackColor} />
        {progressPath && (
          <>
            <path d={progressPath} fill="url(#redGradient)" />
            <path d={progressPath} fill="url(#circleSmall)" />
            <path
              d={progressPath}
              fill="url(#redGradientBlur)"
              filter="url(#blurFilter)"
            />

            <path
              d={thinArcPath}
              stroke="url(#redGradient)" 
              strokeWidth={secondaryProgressWidth}
              fill="none"
              opacity={0.3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d={`
        M ${
          centerX +
          (outerRadius + tickerOffset) * Math.cos(endRad) -
          tickerSize * Math.sin(endRad)
        }
          ${
            centerY +
            (outerRadius + tickerOffset) * Math.sin(endRad) +
            tickerSize * Math.cos(endRad)
          }
        L ${
          centerX +
          (outerRadius + tickerOffset) * Math.cos(endRad) +
          tickerSize * Math.sin(endRad)
        }
          ${
            centerY +
            (outerRadius + tickerOffset) * Math.sin(endRad) -
            tickerSize * Math.cos(endRad)
          }
        L ${centerX + (innerRadius + 20) * Math.cos(endRad)}
          ${centerY + (innerRadius + 20) * Math.sin(endRad)}
        Z
      `}
              fill="white"
            />

            <line
              x1={centerX + (innerRadius - 0.5) * Math.cos(endRad)}
              y1={centerY + (innerRadius - 0.5) * Math.sin(endRad)}
              x2={centerX + (outerRadius + 0.5) * Math.cos(endRad)}
              y2={centerY + (outerRadius + 0.5) * Math.sin(endRad)}
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              opacity={0.5}
            />
          </>
        )}
        
      </g>

      <g transform={scaleTransform}>
        <path
          d="M62.9734 162.737L59.6273 163.633L62.0768 166.083L62.9734 162.737Z"
          fill={tickColor}
        />
        <path
          d="M63.6427 63.3745L60.2967 62.4779L62.7462 60.0284L63.6427 63.3745Z"
          fill={tickColor}
        />
        <path
          d="M164.168 162.332L167.514 163.229L165.064 165.678L164.168 162.332Z"
          fill={tickColor}
        />
        <path
          d="M162.814 63.6427L166.16 62.7461L163.711 60.2966L162.814 63.6427Z"
          fill={tickColor}
        />
        <path
          d="M42.905 113.4L39.905 115.132L39.905 111.668L42.905 113.4Z"
          fill={tickColor}
        />
        <path
          d="M184.013 113.4L187.013 115.132L187.013 111.668L184.013 113.4Z"
          fill={tickColor}
        />
        <path
          d="M113.4 42.8763L111.668 39.8763L115.132 39.8763L113.4 42.8763Z"
          fill={tickColor}
        />
      </g>
    </svg>
  );
};
