import { ReactNode } from "react";

interface PixelHeadingProps {
  eyebrow?: string;
  children: ReactNode;
  subtitle?: string;
}

/** Standard section heading: small eyebrow label, pixel-font title, and an
 * optional readable subtitle — used at the top of every major section. */
export function PixelHeading({ eyebrow, children, subtitle }: PixelHeadingProps) {
  return (
    <div className="section-head">
      {eyebrow && <span className="eyebrow pixel">{eyebrow}</span>}
      <h2>{children}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
