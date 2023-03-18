import { Card, Image, Text, Group, Center, Flex } from "@mantine/core";

import HeartIcon from "../../../Icons/HeartIcon";
import RepostIcon from "../../../Icons/RepostIcon";
import UserIcon from "../../../Icons/UserIcon";
import { useUpdateCarMutation } from "../../../services/car";
import { carType } from "../../../types";
import GridView from "./GridView";
import ListView from "./ListView";

type carCardProps = {
  car: carType;
  grid: boolean;
};

export default function CarCard({ grid, car }: carCardProps) {
  const { id, favourited } = car;
  const [updateCar] = useUpdateCarMutation();

  const handleSetFavourite = () => {
    updateCar({ id: id, favourited: !favourited });
  };
  return (
    <>
      {grid ? (
        <GridView car={car} handleSetFavourite={handleSetFavourite} />
      ) : (
        <ListView car={car} handleSetFavourite={handleSetFavourite} />
      )}
    </>
  );
}
