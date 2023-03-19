import { Card, Image, Text, Group, Center, Flex } from "@mantine/core";

import HeartIcon from "../../../Icons/HeartIcon";
import RepostIcon from "../../../Icons/RepostIcon";
import UserIcon from "../../../Icons/UserIcon";
import { carType } from "../../../types";

type listViewProps = {
  car: carType;
};
export default function ListView({ car }: listViewProps) {
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
  return (
    <>
      <Card.Section className="flex justify-center items-center" mx={0}>
        <Image src={image} alt={`${brand} ${model}`} maw={220} mah={115} />
      </Card.Section>
      <Flex
        direction={"column"}
        wrap={"nowrap"}
        justify={"space-between"}
        align={"start"}
        className="w-full"
      >
        <Flex
          wrap={"nowrap"}
          justify={"space-between"}
          align={"start"}
          className="w-full"
        >
          <div className="font-dmSans">
            <Text fw={700} fz={18} className="text-dark1 whitespace-nowrap">
              {brand} {model}
            </Text>
            <Text fw={400} fz={16} className="text-darkGray whitespace-nowrap">
              {type}
            </Text>
          </div>
          <HeartIcon
            width={24}
            height={24}
            onClick={() => {}}
            className={`${
              favourited ? "fill-current text-red-500 " : "text-darkGray6  "
            } cursor-pointer`}
          />
        </Flex>

        <Card.Section mx={0} className="w-full">
          <Group position="apart" className="w-full">
            <div className="flex gap-2 items-center justify-start">
              <Center>
                <UserIcon className="text-purple mx-1" stroke={"1.5"} />
                <Text
                  fz={18}
                  fw={400}
                  className="font-dmSans whitespace-nowrap"
                >
                  {capacity}
                </Text>
              </Center>
              <Center>
                <RepostIcon className="text-purple mx-1" stroke={"1.5"} />
                <Text
                  fz={16}
                  fw={400}
                  className="font-dmSans whitespace-nowrap"
                >
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
      </Flex>
    </>
  );
}
