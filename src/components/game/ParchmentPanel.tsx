import { HTMLAttributes, ReactNode } from "react";

interface ParchmentPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** The base "paper" surface used for cards, form panels, and modals. */
export function ParchmentPanel({ children, className = "", ...rest }: ParchmentPanelProps) {
  return (
    <div className={`parchment-panel ${className}`} {...rest}>
      {children}
    </div>
  );
}
