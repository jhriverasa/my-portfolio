import * as React from "react"
import { SVGProps } from "react"
const NextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Next.js logomark"
    viewBox="0 0 180 180"
    {...props}
  >
    <mask
      id="a"
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <circle cx={90} cy={90} r={90} />
    </mask>
    <g mask="url(#a)">
      <circle cx={90} cy={90} r={90} data-circle="true" />
      <path
        fill="url(#b)"
        d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325Z"
      />
      <path fill="url(#c)" d="M115 54h12v72h-12z" />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={109}
        x2={144.5}
        y1={116.5}
        y2={160.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={121}
        x2={120.799}
        y1={54}
        y2={106.875}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default NextIcon

