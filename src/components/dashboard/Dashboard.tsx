import { Button, Container, Flex, Grid, Image, Text } from "@mantine/core";
import EnergyIcon from "../../Icons/EnergyIcon";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import RangeIcon from "../../Icons/RangeIcon";
import BreakFluidIcon from "../../Icons/BreakFluidIcon";
import TireWearIcon from "../../Icons/TireWearIcon";
import RecycleIcon from "../../Icons/RecycleIcon";
import RepostIcon from "../../Icons/RepostIcon";
import SettingsIcon from "../../Icons/SettingsIcon";
import EnergyIconOutlined from "../../Icons/EnergyIconOutlined";
function Dashboard() {
  return (
    <div className="px-8 py-4  ">
      <Grid gutter={20} grow>
        <Grid.Col
          xs={2}
          bg="blue"
          m="sm"
          className="flex flex-col justify-center items-center  gap-7 bg-purple rounded-2xl px-14 py-5"
        >
          <Flex
            direction={"column"}
            justify="center"
            align={"center"}
            gap={"10px"}
          >
            <EnergyIcon className="transform -translate-x-1/2 -translate-y-1/2" />
            <Text
              className="font-dmSans tracking-[0.07em]"
              color={"white"}
              fw={700}
              fz={24}
              fs="normal"
            >
              Energy
            </Text>
          </Flex>
          <div style={{ width: 112, height: 112 }}>
            <CircularProgressbarWithChildren
              strokeWidth={11}
              value={45}
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
                pathColor: `#fff`,
                textColor: "#fff",
                trailColor: "#B37EFC ",
                backgroundColor: "white",
              })}
            >
              <Text fz={24} fw={700} color={"white"}>
                45%
              </Text>
            </CircularProgressbarWithChildren>
          </div>
        </Grid.Col>
        <Grid.Col
          xs={2}
          bg="blue"
          m="sm"
          className="flex flex-col justify-center items-center  gap-7 bg-white rounded-2xl px-14 py-5"
        >
          <Flex
            direction={"column"}
            justify="center"
            align={"center"}
            gap={"10px"}
          >
            <RangeIcon className="text-range transform -translate-x-1/2 -translate-y-1/2" />
            <Text
              className="font-dmSans tracking-[0.07em] text-dark1"
              fw={700}
              fz={24}
              fs="normal"
            >
              Range
            </Text>
          </Flex>
          <div style={{ width: 112, height: 112 }}>
            <CircularProgressbarWithChildren
              strokeWidth={10}
              value={45}
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
                pathColor: `#FF7E86`,
                textColor: "#000",
                trailColor: "#F4F5F9 ",
                backgroundColor: "white",
              })}
            >
              <Text fw={700} fz={24} className={"text-dark1"}>
                157k
              </Text>
            </CircularProgressbarWithChildren>
          </div>
        </Grid.Col>
        <Grid.Col
          xs={2}
          bg="blue"
          m="sm"
          className="flex flex-col justify-center items-center  gap-7 bg-white rounded-2xl px-14 py-5"
        >
          <Flex
            direction={"column"}
            justify="center"
            align={"center"}
            gap={"10px"}
          >
            <BreakFluidIcon className="text-purple transform -translate-x-1/2 -translate-y-1/2" />
            <Text
              className="font-dmSans tracking-[0.07em] whitespace-nowrap text-dark1"
              fw={700}
              fz={24}
              fs="normal"
            >
              Break fluid
            </Text>
          </Flex>
          <div style={{ width: 112, height: 112 }}>
            <CircularProgressbarWithChildren
              strokeWidth={10}
              value={9}
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
                pathColor: `#A162F7`,
                textColor: "#000",
                trailColor: "#F4F5F9 ",
                backgroundColor: "white",
              })}
            >
              <Text fw={700} fz={24} className={"text-dark1"}>
                9%
              </Text>
            </CircularProgressbarWithChildren>
          </div>
        </Grid.Col>
        <Grid.Col
          xs={2}
          bg="blue"
          m="sm"
          className="flex flex-col justify-center items-center  gap-7 bg-white rounded-2xl px-14 py-5"
        >
          <Flex
            direction={"column"}
            justify="center"
            align={"center"}
            gap={"10px"}
          >
            <TireWearIcon className="text-yellow transform -translate-x-1/2 -translate-y-1/2" />
            <Text
              className="font-dmSans tracking-[0.07em] whitespace-nowrap text-dark1"
              fw={700}
              fz={24}
              fs="normal"
            >
              Tire Wear
            </Text>
          </Flex>
          <div style={{ width: 112, height: 112 }}>
            <CircularProgressbarWithChildren
              strokeWidth={10}
              value={25}
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
                pathColor: `#F6CC0D`,
                textColor: "#000",
                trailColor: "#F4F5F9 ",
                backgroundColor: "white",
              })}
            >
              <Text fw={700} fz={24} className={"text-dark1"}>
                25%
              </Text>
            </CircularProgressbarWithChildren>
          </div>
        </Grid.Col>
        <Grid.Col
          xs={5}
          m="sm"
          className="flex pl-6 pr-2 justify-between items-center bg-carrotOrange rounded-[4px]"
        >
          <Flex direction={"column"} gap={28}>
            <Flex direction={"column"}>
              <Text color={"#0F2837"} fw={700} fz={24}>
                Apply for a car loan !
              </Text>
              <Text color={"#0F2837"} fw={500} fz={16}>
                This is a sample of a generated text
              </Text>
            </Flex>
            <button className="px-6 py-3 w-fit bg-tangaroa  text-white rounded-[4px] font-bold tracking-wider text-xs hover:bg-tangaroa">
              Discover More
            </button>
          </Flex>

          <Image src="/images/desk.png" alt="desk" maw={"15rem"} />
        </Grid.Col>
        <Grid.Col
          xs={1}
          m="sm"
          className="flex justify-start items-start  gap-7 bg-tangaroa rounded-[4px]  py-7 pl-6 "
        >
          <Flex direction={"column"} w={70}>
            <Text fw={700} fz={24} color="white" className="  font-effra">
              You have earned
              <Text fw={700} fz={40} className="text-carrotOrange1 font-effra">
                20
              </Text>
              Badges!
            </Text>
            <Text
              fw={400}
              fz={12}
              className="text-carrotOrange1 font-effra whitespace-nowrap"
            >
              Hooray! Way to go Mohammed!
            </Text>
          </Flex>
          <Image
            src="/images/trophy.png"
            alt="trophy"
            width={110}
            className="ml-auto"
          />
        </Grid.Col>
        <Grid.Col
          span={1}
          m="sm"
          className="flex justify-start items-start  gap-7 bg-pompadour rounded-[4px]  py-7 pl-6 "
        >
          <Flex direction={"column"} w={70}>
            <Text fw={700} fz={24} color="white" className=" font-effra ">
              You have earned
              <Text fw={700} fz={40} className="text-romantic font-effra">
                1500
              </Text>
              Points!
            </Text>
            <Text
              fw={400}
              fz={12}
              className="text-romantic font-effra whitespace-nowrap"
            >
              Redeem and claim your rewards!
            </Text>
          </Flex>
          <Image
            src="/images/people-rushing.png"
            alt="trophy"
            width={110}
            className="ml-auto"
          />
        </Grid.Col>
        <Grid.Col
          xs={1}
          m="sm"
          className="flex flex-col justify-start items-start  gap-4 bg-tertiary rounded-xl  py-4 px-7 "
        >
          <Flex gap={4} justify="start">
            <RecycleIcon width={24} height={24} />
            <Text fz={16} fw={700} className="font-dmSans">
              64% Recommend
            </Text>
          </Flex>
          <Image src={"/images/9.png"} alt="miniCooper" width={255} mah={106} />
          <Text fw={700} fz={20} className="leading-none">
            Mini Cooper
          </Text>
          <Flex
            justify={"space-between"}
            align={"center"}
            gap={16}
            className={"w-full"}
          >
            <RepostIcon />
            <Text fw={500} fz={14} className="text-darkGray">
              132k
            </Text>
            <SettingsIcon width={16} height={16} />
            <EnergyIconOutlined width={16} height={16} />
            <Text fw={500} fz={14} className="text-darkGray ml-auto">
              $32/h
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col
          xs={1}
          m="sm"
          className="flex flex-col justify-start items-start  gap-4 bg-tertiary rounded-xl  py-4 px-7 "
        >
          <Flex gap={4} justify="start">
            <RecycleIcon width={24} height={24} />
            <Text fz={16} fw={700} className="font-dmSans">
              74% Recommend
            </Text>
          </Flex>
          <Image
            src={"/images/10.png"}
            alt="miniCooper"
            width={255}
            mah={106}
          />
          <Text fw={700} fz={20} className="leading-none">
            Porsche 911 Carrera
          </Text>
          <Flex
            justify={"space-between"}
            align={"center"}
            gap={16}
            className={"w-full"}
          >
            <RepostIcon />
            <Text fw={500} fz={14} className="text-darkGray">
              130k
            </Text>
            <SettingsIcon width={16} height={16} />
            <EnergyIconOutlined width={16} height={16} />
            <Text fw={500} fz={14} className="text-darkGray ml-auto">
              $28/h
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col
          xs={1}
          m="sm"
          className="flex flex-col justify-start items-start  gap-4 bg-tertiary rounded-xl  py-4 px-7 "
        >
          <Flex gap={4} justify="start">
            <RecycleIcon width={24} height={24} />
            <Text fz={16} fw={700} className="font-dmSans">
              74% Recommend
            </Text>
          </Flex>
          <Image
            src={"/images/11.png"}
            alt="miniCooper"
            width={255}
            mah={106}
          />
          <Text fw={700} fz={20} className="leading-none">
            Porsche 911 Carrera
          </Text>
          <Flex
            justify={"space-between"}
            align={"center"}
            gap={16}
            className={"w-full"}
          >
            <RepostIcon />
            <Text fw={500} fz={14} className="text-darkGray">
              130k
            </Text>
            <SettingsIcon width={16} height={16} />
            <EnergyIconOutlined width={16} height={16} />
            <Text fw={500} fz={14} className="text-darkGray ml-auto">
              $28/h
            </Text>
          </Flex>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Dashboard;
