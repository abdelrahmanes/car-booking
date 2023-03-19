import { Flex, Grid, Image, Text } from "@mantine/core";
import EnergyIcon from "../../Icons/EnergyIcon";
import { useState, useEffect } from "react";
import RangeIcon from "../../Icons/RangeIcon";
import BreakFluidIcon from "../../Icons/BreakFluidIcon";
import TireWearIcon from "../../Icons/TireWearIcon";
import { carType } from "../../types";
import SpecCard from "./portions/SpecCard";
import TopCarCard from "./portions/TopCarCard";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useGetItemsQuery } from "../../services/car";

function Dashboard() {
  const [topCars, setTopCars] = useState<carType[]>([]);
  const { data } = useGetItemsQuery("");

  const top3 = (): carType[] => {
    let dataForSort;
    if (data) {
      dataForSort = [...data?.specs];
    }
    return dataForSort
      ?.sort((a: carType, b: carType) => b.stars - a.stars)
      .slice(0, 3)!;
  };

  useEffect(() => {
    setTopCars(top3());
  }, [data]);

  const specCardsData = [
    {
      id: 1,
      bgColor: "purple",
      label: "Energy",
      labelNum: "45",
      labelColor: "white",
      icon: EnergyIcon,
      value: 45,
      pathColor: `#fff`,
      textColor: "#fff",
      trailColor: "#B37EFC",
    },
    {
      id: 2,
      bgColor: "white",
      label: "Range",
      icon: RangeIcon,
      labelNum: "157k",
      labelColor: "dark1",
      value: 57,
      pathColor: `#FF7E86`,
      textColor: "#000",
      trailColor: "#F4F5F9",
    },
    {
      id: 3,
      bgColor: "white",
      label: "Brake Fluid",
      labelNum: "9",
      labelColor: "dark1",
      icon: BreakFluidIcon,
      value: 9,
      pathColor: `#A162F7`,
      textColor: "#000",
      trailColor: "#F4F5F9",
    },
    {
      id: 4,
      bgColor: "white",
      label: "Tire Wear",
      labelNum: "25",
      labelColor: "dark1",
      icon: TireWearIcon,
      value: 25,
      pathColor: `#F6CC0D`,
      textColor: "#000",
      trailColor: "#F4F5F9",
    },
  ];

  const { t } = useTranslation();
  const lang = localStorage.getItem("lang");
  return (
    <div className="p-8 ">
      <Grid gutter={20} grow>
        {specCardsData.map((item) => {
          return (
            <SpecCard
              key={item.id}
              bgColor={item.bgColor}
              label={item.label}
              labelColor={item.labelColor}
              labelNum={item.labelNum}
              value={item.value}
              pathColor={item.pathColor}
              textColor={item.textColor}
              trailColor={item.trailColor}
            >
              <item.icon
                className={`transform  ${
                  lang === "ar"
                    ? "translate-x-2.5 -translate-y-2.5"
                    : "-translate-x-1/2 -translate-y-1/2"
                }`}
              />
            </SpecCard>
          );
        })}
      </Grid>
      <Grid grow>
        <Grid.Col
          xs={5}
          m="sm"
          className={`flex px-4 justify-between items-center bg-carrotOrange rounded-[4px]`}
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

          <Image src="/images/desk.png" alt="desk" maw={"15rem"} miw={"8rem"} />
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
      </Grid>
      <Grid grow>
        {topCars?.map((car: carType) => {
          return <TopCarCard key={car.id} car={car} />;
        })}
      </Grid>
    </div>
  );
}

export default Dashboard;
