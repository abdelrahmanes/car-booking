import { Card, Image, Text, Group, Center, Flex } from "@mantine/core";

import HeartIcon from "../../../Icons/HeartIcon";
import RepostIcon from "../../../Icons/RepostIcon";
import UserIcon from "../../../Icons/UserIcon";
import { useUpdateCarMutation } from "../../../services/car";
import { carType } from "../../../types";

type carCardProps = {
  car: carType;
};

export default function CarCard({ car }: carCardProps) {
  const {
    id,
    brand,
    model,
    image,
    capacity,
    price,
    type,
    favourited,
    state,
    automatic,
  } = car;

  const [updateCar] = useUpdateCarMutation();

  const handleSetFavourite = () => {
    updateCar({ id: id, favourited: !favourited });
  };
  return (
    <>
      <Flex wrap={"nowrap"} justify={"space-between"} align={"start"}>
        <div className="font-dmSans">
          <Text
            fw={700}
            fz={18}
            className="text-dark1 whitespace-nowrap"
            w={200}
            truncate
          >
            {brand} {model}
          </Text>
          <Text fw={400} fz={16} className="text-darkGray whitespace-nowrap">
            {type}
          </Text>
        </div>
        <HeartIcon
          width={24}
          height={24}
          onClick={() => {
            handleSetFavourite();
          }}
          className={`${
            favourited ? "fill-current text-red-500 " : "text-darkGray6  "
          } cursor-pointer`}
        />
      </Flex>
      <Card.Section className="flex justify-center items-center" mx={0}>
        <Image src={image} alt={`${brand} ${model}`} maw={233} h={115} />
      </Card.Section>

      <Card.Section mx={0}>
        <Group position="apart">
          <div className="flex gap-2 items-center justify-start">
            <Center>
              <UserIcon className="text-purple mx-1" stroke={"1.5"} />
              <Text fz={18} fw={400} className="font-dmSans whitespace-nowrap">
                {capacity}
              </Text>
            </Center>
            <Center>
              <RepostIcon className="text-purple mx-1" stroke={"1.5"} />
              <Text fz={16} fw={400} className="font-dmSans whitespace-nowrap">
                {automatic ? "Auto" : "Manual"}
              </Text>
            </Center>
          </div>
          <Text
            fw={500}
            fz={18}
            className="font-dmSans text-dark1 whitespace-nowrap"
          >
            ${price}
            <span className="text-darkGray">/d</span>
          </Text>
        </Group>
      </Card.Section>
    </>
  );
}
