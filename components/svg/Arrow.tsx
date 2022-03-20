export default function Arrow({
  direction,
  width,
  color,
}: {
  direction?: "left" | "right" | "bottom" | "top";
  width?: number;
  color?: string;
}) {
  return (
    <svg
      className={`svg ${direction || ""}`}
      fill={color || "#000000"}
      height={width || "20px"}
      viewBox="0 0 24 24"
      width={width || "20px"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
      <style jsx>{`
        .svg {
          transition: all 0.3s ease;
        }
        .bottom {
          transform: rotate(90deg);
        }
        .left {
          transform: rotate(180deg);
        }
        .top {
          transform: rotate(270deg);
        }
      `}</style>
    </svg>
  );
}
