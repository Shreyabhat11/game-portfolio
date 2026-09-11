import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "default" | "gold";
type Size = "default" | "small";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

function classes({ variant = "default", size = "default", className = "" }: Omit<BaseProps, "children">) {
  return ["wood-btn", variant === "gold" ? "gold" : "", size === "small" ? "small" : "", className]
    .filter(Boolean)
    .join(" ");
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** A physical-looking wooden game button. Renders a <button> by default,
 * or an <a> when an `href` is supplied. */
export function WoodenButton({ children, variant, size, className, ...rest }: ButtonProps) {
  return (
    <button className={classes({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}

export function WoodenLink({ children, variant, size, className, href, ...rest }: LinkProps) {
  return (
    <a href={href} className={classes({ variant, size, className })} {...rest}>
      {children}
    </a>
  );
}
