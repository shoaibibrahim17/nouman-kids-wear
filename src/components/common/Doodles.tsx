import type { SVGProps } from "react";

/**
 * Tasteful kidswear-related line doodles used as low-opacity decorative
 * accents (hero, category section, empty gallery tiles). They are purely
 * decorative — every glyph is `aria-hidden` and inherits `currentColor`, so
 * callers control colour/opacity/size via className.
 *
 * Keep these small and subtle: they should never read as cartoon graphics.
 */

const base: SVGProps<SVGSVGElement> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function StarDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5l2.2 4.9 5.3.5-4 3.6 1.2 5.2L12 15.6 7.3 17.7l1.2-5.2-4-3.6 5.3-.5z" />
    </svg>
  );
}

export function HeartDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 20s-7-4.3-7-9.3A3.7 3.7 0 0112 8a3.7 3.7 0 017 2.7c0 5-7 9.3-7 9.3z" />
    </svg>
  );
}

export function CloudDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M7 17h10a3.5 3.5 0 000-7 4.5 4.5 0 00-8.7-1.3A3.4 3.4 0 007 17z" />
    </svg>
  );
}

export function HangerDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 7a1.7 1.7 0 111.7 1.7c-.9 0-1.7.6-1.7 1.7" />
      <path d="M12 10.4L4.3 15.2a1 1 0 00.5 1.8h14.4a1 1 0 00.5-1.8L12 10.4z" />
    </svg>
  );
}

export function SockDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 3h4v6.5c0 1 .4 1.6 1.3 2.2l3.2 2.2a3 3 0 01-1.7 5.6c-1 0-1.8-.4-2.7-1L8 16c-1-.7-2-1.7-2-3.4V3z" />
      <path d="M9 9.5h4" />
    </svg>
  );
}

export function OnesieDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M8 4l1.5 2h5L16 4l3 2.2-1.8 3.2L16 9v7a2 2 0 01-2 2h-4a2 2 0 01-2-2V9l-1.2.4L5 6.2 8 4z" />
      <path d="M10.5 15.5h3" />
    </svg>
  );
}

export function TeddyDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="7" cy="6.5" r="1.8" />
      <circle cx="17" cy="6.5" r="1.8" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="10.2" cy="11" r=".5" fill="currentColor" />
      <circle cx="13.8" cy="11" r=".5" fill="currentColor" />
      <path d="M10.5 14c.9.7 2.1.7 3 0" />
    </svg>
  );
}

export function ButtonDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="10" cy="10" r=".6" fill="currentColor" />
      <circle cx="14" cy="10" r=".6" fill="currentColor" />
      <circle cx="10" cy="14" r=".6" fill="currentColor" />
      <circle cx="14" cy="14" r=".6" fill="currentColor" />
    </svg>
  );
}
