type iconProps = {
  className?: string;
  stroke?: string;
  width?: number;
  height?: number;
};
export default function RangeIcon({
  className,
  stroke,
  width,
  height,
}: iconProps) {
  return (
    <div className="p-5 bg-range bg-opacity-10 rounded-full w-5 h-5">
      <svg
        width={width || 20}
        height={height || 20}
        viewBox="0 0 20 21"
        fill="none"
        stroke={stroke}
        className={className}
      >
        <path
          d="M10.4164 18.4215L13.5197 15.3182L12.2237 14.0054L10.6892 15.5399L10.6891 5.65031L12.2236 7.18484L13.5366 5.87188L10.4162 2.7686C10.0581 2.41047 9.46142 2.41047 9.10328 2.7686L6 5.87188L7.31296 7.18484L8.84749 5.65031V15.5399L7.31296 14.0054L6 15.3183L9.10328 18.4216C9.47841 18.7795 10.0581 18.7795 10.4162 18.4214L10.4164 18.4215Z"
          fill="#FF7E86"
        />
      </svg>
    </div>
  );
}
