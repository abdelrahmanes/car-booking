type iconProps = {
  className?: string;
  stroke?: string;
  width?: number;
  height?: number;
};
export default function EnergyIcon({
  className,
  stroke,
  width,
  height,
}: iconProps) {
  return (
    <div className="p-5 bg-energy rounded-full w-5 h-5">
      <svg
        width={width || 20}
        height={height || 20}
        viewBox="0 0 20 21"
        fill="none"
        stroke={stroke}
        className={className}
      >
        <g clip-path="url(#clip0_2270_518)">
          <path
            d="M3.45417 11.6784L11.251 0.882735C11.7668 0.168648 12.8934 0.638777 12.7486 1.50764L11.6666 7.99965H15.8701C16.55 7.99965 16.9437 8.76979 16.5457 9.32089L8.74883 20.1166C8.2331 20.8307 7.10646 20.3605 7.25127 19.4917L8.33327 12.9997H4.12974C3.44993 12.9997 3.05615 12.2295 3.45417 11.6784Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2270_518">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
