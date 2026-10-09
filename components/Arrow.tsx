export function Arrow({
  size,
  variant,
  className,
}: {
  size: string;
  variant: string;
  className?: string;
}) {
  const color =
    variant === "black"
      ? "var(--color-foreground)"
      : variant === "red"
        ? "var(--color-primary)"
        : "white";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 109 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M108.485 54.2422L54.2422 108.484L45.7578 100L85.5156 60.2422H0V48.2422H85.5156L45.7578 8.48438L54.2422 0L108.485 54.2422Z"
        fill={className ? "currentColor" : color}
      />
    </svg>
  );
}
