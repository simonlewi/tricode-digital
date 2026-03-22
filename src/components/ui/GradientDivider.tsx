interface GradientDividerProps {
  width?: string;
  opacity?: number;
}

export function GradientDivider({
  width = "100%",
  opacity = 0.3,
}: GradientDividerProps) {
  return (
    <div
      className="mx-auto h-px"
      style={{
        width,
        opacity,
        background:
          "linear-gradient(90deg, transparent, #7C31B2, #AD4158, #E88E40, #F8B447, transparent)",
      }}
      aria-hidden="true"
    />
  );
}
