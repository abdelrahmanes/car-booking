type iconProps = {
  className?: string;
  stroke?: string;
  width?: number;
  height?: number;
  fill?: string;
};
export default function HeartIcon({
  className,
  stroke,
  width,
  height,
}: iconProps) {
  return (
    <div className="  bg-transparent rounded-full  ">
      <svg
        width={width || 20}
        height={height || 20}
        fill="none"
        stroke={stroke}
        className={className}
      >
        <path
          d="M19.8164 5.1838L19.8164 5.18386C21.7279 7.095 21.7279 10.207 19.816 12.1182L19.8159 12.1183L11.9997 19.9345L4.18359 12.1183C2.27226 10.2066 2.27205 7.09447 4.18348 5.18342C6.09512 3.27216 9.20731 3.27224 11.1184 5.18337C11.2247 5.28962 11.3257 5.4004 11.422 5.51699L11.9992 6.21548L12.5775 5.5179C12.6749 5.40047 12.7762 5.28905 12.8814 5.18386C14.793 3.2726 17.9052 3.27267 19.8164 5.1838Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
