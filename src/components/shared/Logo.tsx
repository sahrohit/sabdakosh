import Link from "next/link";
import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Logo = ({ color, ...rest }: LogoProps) => {
  return (
    <Link href="/">
      <svg
        {...rest}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 263.14 81.5"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              d="M70,65.21h0v-9H65.51V51.76H60.23a16.08,16.08,0,0,0-6.51-11.38,23.48,23.48,0,0,0-8.38-4.13V33.09h1.87V30.85H45.09l-3.17-12.7h1.93V9.93H42L39.36,3.37V0H37.12V3.37L34.5,9.93H32.64v8.22h1.93l-3.18,12.7H29.28v2.24h1.87v3.17a23.43,23.43,0,0,0-8.39,4.12,16.15,16.15,0,0,0-6.51,11.38H11v4.49H6.5v9H0v11.2H76.49V65.21Zm-2.24-6.72v6.72H46.83V58.49ZM38.24,6.6l1.34,3.33H36.91Zm-3.36,5.58H41.6v3.73H34.88Zm2,6h2.73l3.17,12.7H33.7ZM33.39,33.09H43.1v2.66a27.8,27.8,0,0,0-4.86-.42,28.68,28.68,0,0,0-4.85.42Zm4.85,4.48c10.43,0,19,6.27,19.74,14.19H18.5C19.25,43.84,27.82,37.57,38.24,37.57ZM13.22,54H63.27v2.24H13.22Zm18.67,6.73V58.49h12.7v2.24ZM44.59,63v2.24H31.89V63ZM8.74,58.49H29.65v6.72H8.74ZM25.92,74.17H2.24V67.45H25.92Zm22.41,0H28.16V71.93H48.33Zm0-4.48H28.16V67.45H48.33Zm25.92,4.48H50.57V67.45H74.25Z"
              fill={color}
            />
            <path
              d="M61.85,9a4.86,4.86,0,1,0,4.85,4.85A4.86,4.86,0,0,0,61.85,9Zm0,7.47a2.62,2.62,0,1,1,2.61-2.62A2.62,2.62,0,0,1,61.85,16.51Z"
              fill={color}
            />
            <path d="M60.73,4.56H63V6.8H60.73Z" fill={color} />
            <path d="M60.73,21H63v2.24H60.73Z" fill={color} />
            <path d="M54.63,8l1.59-1.6L57.81,8,56.22,9.54Z" fill={color} />
            <path d="M66.32,19.56,67.91,18l1.59,1.59-1.59,1.6Z" fill={color} />
            <path d="M52.51,12.77h2.24V15H52.51Z" fill={color} />
            <path d="M54.67,19.6,56.26,18l1.59,1.59-1.59,1.59Z" fill={color} />
            <path d="M66.28,7.91l1.6-1.59,1.59,1.59L67.88,9.5Z" fill={color} />
            <path d="M68.94,12.77h2.24V15H68.94Z" fill={color} />
            <path
              d="M21.77,19.65A5.1,5.1,0,0,0,16.92,16a4.8,4.8,0,0,0-.85.08A6.72,6.72,0,0,0,5.38,17.33H5.27a5,5,0,1,0,0,10.08H21a3.92,3.92,0,0,0,.82-7.76ZM21,25.17H5.27a2.8,2.8,0,1,1,0-5.6,3.41,3.41,0,0,1,.55.05l.89.18L7.07,19a4.48,4.48,0,0,1,7.71-1l.48.64.77-.26a2.73,2.73,0,0,1,.89-.15,2.82,2.82,0,0,1,2.79,2.57l.09,1.07,1.08-.05H21a1.68,1.68,0,1,1,0,3.36Z"
              fill={color}
            />
            <path d="M50.57,47.28h2.24v2.24H50.57Z" fill={color} />
            <path d="M46.09,47.28h2.24v2.24H46.09Z" fill={color} />
            <path d="M23.68,47.28h2.24v2.24H23.68Z" fill={color} />
            <path d="M32.64,47.28h2.24v2.24H32.64Z" fill={color} />
            <path d="M37.12,47.28h2.24v2.24H37.12Z" fill={color} />
            <path d="M28.16,47.28H30.4v2.24H28.16Z" fill={color} />
            <path d="M41.6,47.28h2.25v2.24H41.6Z" fill={color} />
            <path
              d="M31,41a19.37,19.37,0,0,0-3.49,1.58l1.13,1.93a17.21,17.21,0,0,1,3.08-1.39Z"
              fill={color}
            />
            <path
              d="M44.61,40.7,44,42.85a18,18,0,0,1,2,.71l.87-2.06A19.59,19.59,0,0,0,44.61,40.7Z"
              fill={color}
            />
            <path
              d="M49,42.56,47.85,44.5a17.32,17.32,0,0,1,1.72,1.17L51,43.91A18.16,18.16,0,0,0,49,42.56Z"
              fill={color}
            />
            <path
              d="M38.24,39.81a22.82,22.82,0,0,0-2.35.12l.22,2.23c.7-.07,1.42-.11,2.13-.11a21.25,21.25,0,0,1,3.68.32l.39-2.2A22.82,22.82,0,0,0,38.24,39.81Z"
              fill={color}
            />
            <path d="M36.94,25.76l2.17-.54L40,28.81l-2.18.54Z" fill={color} />
            <path d="M53.63,69.69h2.24v2.24H53.63Z" fill={color} />
            <path d="M58.11,69.69h2.24v2.24H58.11Z" fill={color} />
            <path d="M62.59,69.69h9v2.24h-9Z" fill={color} />
            <path d="M20.76,60.73h6V63h-6Z" fill={color} />
            <path d="M16.28,60.73h2.24V63H16.28Z" fill={color} />
            <path d="M11.8,60.73H14V63H11.8Z" fill={color} />
            <path d="M9.26,69.69h9v2.24h-9Z" fill={color} />
            <path d="M4.78,69.69H7v2.24H4.78Z" fill={color} />
            <path d="M51.09,60.73h2.24V63H51.09Z" fill={color} />
            <path d="M55.57,60.73h6V63h-6Z" fill={color} />
            <path d="M8.81,20.54H13.3v2.24H8.81Z" fill={color} />
            <path d="M15.54,20.54h2.24v2.24H15.54Z" fill={color} />
            <path d="M20.69,5.15h2.24V7.39H20.69Z" fill={color} />
            <text
              transform="translate(84.35 56.24)"
              fontSize="58"
              fill={color}
              fontFamily="AdobeDevanagari-Regular, Adobe Devanagari"
            >
              शब्द
              <tspan
                x="82.82"
                y="0"
                fontFamily="MonotypeCorsiva, Monotype Corsiva"
                letterSpacing="0em"
              >
                kosh
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </Link>
  );
};

Logo.defaultProps = {
  color: "#3eb2a7",
};

export default Logo;
