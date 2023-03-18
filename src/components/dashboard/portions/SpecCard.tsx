import { Flex, Grid, Image, Text } from "@mantine/core";

import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

type SpecCardProps = {
  bgColor: string; //background color
  children: React.ReactNode; //icon
  label: string; // card label
  labelNum: string; // card label
  value: number; //progress value
  pathColor: string;
  textColor: string;
  trailColor: string;
  backgroundColor?: string;
  labelColor: string;
};

export default function SpecCard({
  bgColor,
  children,
  label,
  labelNum,
  labelColor,
  value,
  pathColor,
  textColor,
  trailColor,
  backgroundColor,
}: SpecCardProps) {
  return (
    <Grid.Col
      xs={2}
      m="xs"
      className={`flex flex-col justify-center items-center  gap-7 bg-${bgColor} rounded-2xl px-14 py-5`}
    >
      <Flex direction={"column"} justify="center" align={"center"} gap={"10px"}>
        {children}
        <Text
          className={`font-dmSans tracking-[0.07em] text-${labelColor} whitespace-nowrap`}
          fw={700}
          fz={24}
          fs="normal"
        >
          {label}
        </Text>
      </Flex>
      <div style={{ width: 112, height: 112 }}>
        <CircularProgressbarWithChildren
          strokeWidth={11}
          value={value}
          circleRatio={0.75}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 1 / 2 + 1 / 8,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",

            // Text size
            textSize: "24px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: pathColor,
            textColor: textColor,
            trailColor: trailColor,
            backgroundColor: "black",
          })}
        >
          <Text fz={24} fw={700} className={`text-${labelColor}`}>
            {labelNum}%
          </Text>
        </CircularProgressbarWithChildren>
      </div>
    </Grid.Col>
  );
}
