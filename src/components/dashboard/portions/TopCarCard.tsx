import { Flex, Grid, Image, Text } from "@mantine/core";
import RecycleIcon from "../../../Icons/RecycleIcon";
import RepostIcon from "../../../Icons/RepostIcon";
import SettingsIcon from "../../../Icons/SettingsIcon";
import EnergyIconOutlined from "../../../Icons/EnergyIconOutlined";
import { carType } from "../../../types";

type TopCarCardProps = {
  car: carType;
};

export default function TopCarCard({ car }: TopCarCardProps) {
  return (
    <Grid.Col
      xs={3}
      m="sm"
      className="flex flex-col justify-start items-start  gap-4 bg-tertiary rounded-xl  py-4 px-7 "
    >
      <Flex gap={4} justify="start">
        <RecycleIcon width={24} height={24} />
        <Text fz={16} fw={700} className="font-dmSans">
          {car.kilometers}% Recommend
        </Text>
      </Flex>
      <Image src={car.image} alt={car.model} width={255} mah={106} />
      <Text fw={700} fz={20} className="leading-none text-[#1F2128]">
        {car.brand} {car.model}
      </Text>
      <Flex
        justify={"space-between"}
        align={"center"}
        gap={16}
        className={"w-full"}
      >
        <RepostIcon className="text-dark2" />
        <Text fw={500} fz={14} className="text-darkGray">
          {car.kilometers}k
        </Text>
        <SettingsIcon width={16} height={16} />
        <EnergyIconOutlined width={16} height={16} />
        <Text fw={500} fz={14} className="text-darkGray ml-auto">
          ${car.price}/h
        </Text>
      </Flex>
    </Grid.Col>
  );
}
