interface WoodenSignProps {
  text: string;
  tilt?: number;
  className?: string;
}

/** A single wooden signpost board carrying pixel-font text. Stack a few
 * with alternating `tilt` values to build a signpost cluster. */
export function WoodenSign({ text, tilt = -1.4, className = "" }: WoodenSignProps) {
  return (
    <div
      className={`wood-sign px-6 py-3 ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <span className="pixel text-[11px] text-parchment text-center block" style={{ textShadow: "0 2px 0 rgba(0,0,0,.4)" }}>
        {text}
      </span>
    </div>
  );
}
