import React from "react";

/**
 * Inline brand control icons from the SYNVO SVG element pack
 * (public/assets/svg-elements-2026-10-08). Inlined so they inherit
 * `currentColor` from the surrounding component.
 */
type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  focusable: false,
} as const;

const stroke = {
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const ArrowLeftIcon: React.FC<IconProps> = (props) => (
  <svg {...base} {...props}>
    <path d="M42 24 H6 M20 10 L6 24 L20 38" {...stroke} />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = (props) => (
  <svg {...base} {...props}>
    <path d="M6 24 H42 M28 10 L42 24 L28 38" {...stroke} />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg {...base} {...props}>
    <path d="M8 16 L24 32 L40 16" {...stroke} />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
  <svg {...base} {...props}>
    <path d="M10 10 L38 38 M38 10 L10 38" {...stroke} />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = (props) => (
  <svg {...base} {...props}>
    <path d="M24 8 V40 M8 24 H40" {...stroke} />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = (props) => (
  <svg {...base} {...props}>
    <path d="M8 24 H40" {...stroke} />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
  <svg {...base} {...props}>
    <path d="M7 12 H41 M7 24 H41 M7 36 H41" {...stroke} />
  </svg>
);
